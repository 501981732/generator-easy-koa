// import Canvas = from 'canvas'
// canvas 安装一直出问题，还要安装一大堆东西  OSX
// so需要安装canvas-prebuilt
// import {createCanvas} from 'canvas-prebuilt'

export default class Canvas {
    constructor() {
    	this.color = 'red'
    }
    getCanvas(params={}) {

            let { shape, width, height, bgColor } = params;
            // var canvas = new createCanvas(width, height);
            // var ctx = canvas.getContext('2d');
            //     ctx.fillStyle = bgColor;
            // if (shape == 'circle') {
            //     //圆形
            //     ctx.beginPath();
            //     ctx.arc(width / 2, width / 2, width / 2, 0, 2 * Math.PI, true);
            //     ctx.fill();

            // } else {
            //     //矩形
            //     ctx.fillRect(0, 0, width, height);
            // }
            // return canvas.toBuffer();
            let flag = shape === 'circle' ? '50%' : '0'
            return `<div style='width:${width}px;height:${height}px;background:${bgColor};border-radius:${flag}' />`
    }
}