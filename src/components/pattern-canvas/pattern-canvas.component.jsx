const PatternCanvas = ({ htmlState }) => {
  if (htmlState) {
    return (
      <div className="canvas-wrapper">
        <canvas className="pattern-canvas" />
      </div>
    );
  }
};

export default PatternCanvas;
