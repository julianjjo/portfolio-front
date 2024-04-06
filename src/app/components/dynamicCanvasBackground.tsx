import dynamic from 'next/dynamic';

const DynamicCanvasBackground = dynamic(
  () => import('./canvasBackground'), // replace './CanvasBackground' with the path to your CanvasBackground component
  { ssr: false } // This will load the component only on client side
);

export default function DynamicCanvasBackgroundComponent() {
  return (
    <div>
      {/* other components */}
      <DynamicCanvasBackground />
      {/* other components */}
    </div>
  );
}