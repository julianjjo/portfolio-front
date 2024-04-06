"use client"

import { useEffect, useRef } from 'react';

export default function CanvasBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return; // Ensure canvas is not null
        const ctx = canvas.getContext('2d');
        if (!ctx) return; // Ensure context is not null

        // Set canvas size to fill window
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Canvas animation options
        const opts = {
            len: 30,
            count: 50,
            baseTime: 10,
            addedTime: 10,
            dieChance: .05,
            spawnChance: 1,
            sparkChance: .1,
            sparkDist: 10,
            sparkSize: 2,

            color: 'hsl(hue,100%,light%)',
            baseLight: 50,
            addedLight: 10, // [50-10,50+10]
            shadowToTimePropMult: 6,
            baseLightInputMultiplier: .1,
            addedLightInputMultiplier: .2,

            cx: canvas.width / 2,
            cy: canvas.height / 2,
            repaintAlpha: .04,
            hueChange: .1
        };

        let tick = 0;
        const lines: Line[] = [];
        const dieX = canvas.width / 2 / opts.len;
        const dieY = canvas.height / 2 / opts.len;
        const baseRad = Math.PI * 2 / 6;

        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Define the Line class and methods
        class Line {
            x: number | undefined;
            y: number | undefined;
            addedX: number | undefined;
            addedY: number | undefined;
            rad:  | undefined;
            lightInputMultiplier:  | undefined;
            color: string | undefined;
            cumulativeTime:  | undefined;
            time:  | undefined;
            targetTime:  | undefined;

            constructor() {
                this.reset();
            }

            reset() {
                this.x = 0;
                this.y = 0;
                this.addedX = 0;
                this.addedY = 0;

                this.rad = 0;

                this.lightInputMultiplier = opts.baseLightInputMultiplier + opts.addedLightInputMultiplier * Math.random();

                this.color = opts.color.replace('hue', tick * opts.hueChange.toString());
                this.cumulativeTime = 0;

                this.beginPhase();
            }

            beginPhase() {
                this.x += this.addedX;
                this.y += this.addedY;

                this.time = 0;
                this.targetTime = (opts.baseTime + opts.addedTime * Math.random()) | 0;

                this.rad += baseRad * (Math.random() < .5 ? 1 : -1);
                this.addedX = Math.cos(this.rad);
                this.addedY = Math.sin(this.rad);

                if (Math.random() < opts.dieChance || this.x > dieX || this.x < -dieX || this.y > dieY || this.y < -dieY) {
                    this.reset();
                }
            }

            step() {
                ++this.time;
                ++this.cumulativeTime;

                if (this.time >= this.targetTime) {
                    this.beginPhase();
                }

                const prop = this.time / this.targetTime,
                    wave = Math.sin(prop * Math.PI / 2),
                    x = this.addedX * wave,
                    y = this.addedY * wave;

                ctx.shadowBlur = prop * opts.shadowToTimePropMult;
                ctx.fillStyle = ctx.shadowColor = this.color.replace('light', (opts.baseLight + opts.addedLight * Math.sin(this.cumulativeTime * this.lightInputMultiplier)).toString());
                ctx.fillRect(opts.cx + (this.x + x) * opts.len, opts.cy + (this.y + y) * opts.len, 2, 2);

                if (Math.random() < opts.sparkChance) {
                    ctx.fillRect(opts.cx + (this.x + x) * opts.len + Math.random() * opts.sparkDist * (Math.random() < .5 ? 1 : -1) - opts.sparkSize / 2, opts.cy + (this.y + y) * opts.len + Math.random() * opts.sparkDist * (Math.random() < .5 ? 1 : -1) - opts.sparkSize / 2, opts.sparkSize, opts.sparkSize);
                }
            }
        }

        // Animation loop
        function loop() {
            window.requestAnimationFrame(loop);

            ++tick;

            ctx.globalCompositeOperation = 'source-over';
            ctx.shadowBlur = 0;
            ctx.fillStyle = `rgba(0,0,0,${opts.repaintAlpha})`;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.globalCompositeOperation = 'lighter';

            if (lines.length < opts.count && Math.random() < opts.spawnChance) {
                lines.push(new Line());
            }

            lines.forEach(line => line.step());
        }

        // Start the animation loop
        loop();

        // Handle window resize
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            opts.cx = canvas.width / 2;
            opts.cy = canvas.height / 2;
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, zIndex: -1, width: "100%", height: "100%" }}>
            {/* Canvas will be rendered here */}
        </canvas>
    );
}
