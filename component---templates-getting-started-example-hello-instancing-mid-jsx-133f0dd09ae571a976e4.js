(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"Tj/T":function(o,e,r){"use strict";r.r(e);var n=r("q1tI"),t=r.n(n),i=r("z0FI"),a=(r("5irr"),r("bjw9")),l=r("3LCa"),c=r("WFpA"),f=r("WrWi"),p=r("IObG"),u=r("xmzN");var s={name:"color",vs:"\n    varying vec3 color_vColor;\n\n    void color_setColor(vec3 color) {\n      color_vColor = color;\n    }\n  ",fs:"\n    varying vec3 color_vColor;\n\n    vec3 color_getColor() {\n      return color_vColor;\n    }\n  "},v=function(o){var e,r;function n(){return o.call(this,{debug:!0})||this}r=o,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.getInfo=function(){return"\n<p>\nHello Instancing - Mid-level\n<p>\nInstanced triangles using luma.gl's mid-level API\n"};var t=n.prototype;return t.onInitialize=function(o){var e=o.gl,r=new l.a(e,new Float32Array([-.2,-.2,.2,-.2,0,.2])),n=new l.a(e,new Float32Array([1,0,0,0,1,0,0,0,1,1,1,0])),t=new l.a(e,new Float32Array([.5,.5,-.5,.5,.5,-.5,-.5,-.5])),i=Object(u.a)(e,{vs:"\n      attribute vec2 position;\n      attribute vec3 color;\n      attribute vec2 offset;\n\n      void main() {\n        color_setColor(color);\n        gl_Position = vec4(position + offset, 0.0, 1.0);\n      }\n    ",fs:"\n      void main() {\n        gl_FragColor = vec4(color_getColor(), 1.0);\n      }\n    ",modules:[s]}),a=new c.a(e,i);return{program:a,vertexArray:new f.a(e,{program:a,attributes:{position:r,color:[n,{divisor:1}],offset:[t,{divisor:1}]}}),positionBuffer:r,colorBuffer:n,offsetBuffer:t}},t.onRender=function(o){var e=o.gl,r=o.program,n=o.vertexArray;o.positionBuffer,o.colorBuffer,o.offsetBuffer;Object(p.a)(e,{color:[0,0,0,1]}),r.draw({vertexArray:n,vertexCount:3,instanceCount:4})},t.onFinalize=function(o){o.gl;var e=o.program,r=o.vertexArray,n=o.positionBuffer,t=o.colorBuffer,i=o.offsetBuffer;e.delete(),r.delete(),n.delete(),t.delete(),i.delete()},n}(a.a);"undefined"==typeof window||window.website||(new v).start();r.d(e,"default",(function(){return d}));var d=function(o){var e,r;function n(){return o.apply(this,arguments)||this}return r=o,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.prototype.render=function(){var o=this.props.pageContext,e=o&&o.exampleConfig||{};return t.a.createElement(i.a,{AnimationLoop:v,exampleConfig:e})},n}(t.a.Component)}}]);
//# sourceMappingURL=component---templates-getting-started-example-hello-instancing-mid-jsx-133f0dd09ae571a976e4.js.map