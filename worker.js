self.document = {
  createElement(type) {
    if (type === 'canvas') {
      return new OffscreenCanvas(0, 0);
    } else {
      console.log('CreateElement called with type = ', type);

      return {
        style: {},
      };
    }
  },

  addEventListener() { },
};

self.window = {
  console: self.console,
  addEventListener() { },
  navigator: {},
  document: self.document,
  removeEventListener: function () { },
  WebGLRenderingContext: {}
};


importScripts(
  'pixiv5_worker.js'
);





self.addEventListener('message', (event) => {

  const { canvas } = event.data;
  canvas.style = {};
  console.log("got message", canvas);



  const app = new PIXI.Application({

    width: 1700,
    height: 896,
    backgroundColor: 0xffffff,
    clearBeforeRender: true,
    transparent: true,
    view: event.data.canvas,
    antialias: true
  });
  //canvas
  const graphics = new PIXI.Graphics();
  // Rectangle
  graphics.beginFill(0xDE3249);
  graphics.drawRect(50, 50, 100, 100);
  graphics.endFill();

  console.log("yo")

  app.stage.addChild(graphics);/*
            },1000)*/


});






