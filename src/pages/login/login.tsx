import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import "../login/login.css";

function Login() {
  const [isDisabled, setButton] = useState(true);
  // 获取昵称
  const [userName,setUserName] =useState()
  const validInput = (e: any) => {
    if (e.target.value.length > 2) {
      setUserName(e.target.value)
      return setButton(false)
    }
  };

  // canvas 颗粒绘制
  useEffect(() => {
    // 获取dom
    const canvas = document.getElementById("canvas")! as HTMLCanvasElement;
    // const log = document.querySelector(".log");
    const ctx = canvas.getContext("2d")!;
    const colors = [
      "#ed1941",
      "#f05b72",
      "#ef4136",
      "#f15a22",
      "#8e3e1f",
      "#fcaf17",
      "#b76f40",
      "#00ae9d",
      "#009ad6",
      "#1d953f",
      "#426ab3",
      "#6950a1",
      "#74787c",
      "#2a5caa",
    ];
    let w: number, h: number;
    // 设置canvas宽高
    function setCanvasSize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      w = window.innerWidth;
      h = window.innerHeight;
    }
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);
    /**
     * 获取min（包含） - max（不包含）之间的随机数
     * @param {number} min 最小值
     * @param {number} max 最大值
     * @returns
     */
    function getRandom(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }
    /**
     * 获取两点距离
     * @param {object} a 第一个点的位置
     * @param {object} b 第二个点的位置
     * @returns
     */
    function getDistance(
      a: { x: number; y: number },
      b: { x: number; y: number }
    ) {
      const x = a.x - b.x;
      const y = a.y - b.y;
      return Math.hypot(x, y); // Math.sqrt(x * x + y * y);
    }

    // 创建粒子类
    class Particle {
      radius: number;
      x: number;
      y: number;
      speedX: number;
      speedY: number;
      color: string;
      constructor() {
        // 粒子半径
        this.radius = getRandom(2.2, 4);
        // 粒子位置
        this.x = getRandom(0 + this.radius, w - this.radius);
        this.y = getRandom(0 + this.radius, h - this.radius);
        // 粒子运动速度
        this.speedX = getRandom(-1, 1);
        this.speedY = getRandom(-1, 1);
        // 粒子颜色
        // this.color = colors[Math.floor(getRandom(0, colors.length))];
        this.color = '#ffffff54';
      }
      // 绘制粒子函数
      draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
      }
      // 连线粒子函数
      link() {
        for (const particle of particles) {
          const distance = getDistance(this, particle);
          if (distance < 150) {
            ctx.beginPath();
            ctx.lineWidth = 0.1;
            ctx.strokeStyle = this.color;
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(particle.x, particle.y);
            ctx.stroke();
          }
        }
      }
      // 移动粒子函数
      move() {
        // 碰撞边界后反弹
        if (this.x <= this.radius || this.x + this.radius >= w) {
          this.speedX *= -1;
        }
        if (this.y <= this.radius || this.y + this.radius >= h) {
          this.speedY *= -1;
        }
        this.x += this.speedX;
        this.y += this.speedY;
      }
    }

    // 粒子数组
    const particles: any = [];
    for (let i = 0; i < 86; i++) {
      const particle = new Particle();
      //   particle.create();
      particles.push(particle);
    }
    // 动画
    function raf() {
      let start: undefined | number;
      function step(timestamp: number) {
        if (start === undefined) {
          start = timestamp;
        }
        // const fps = Math.trunc(1000 / (timestamp - start));
        start = timestamp;
        // log.innerHTML = `${fps}FPS`;
        // 清空画布
        ctx.clearRect(0, 0, w, h);
        // 更新粒子
        for (const particle of particles) {
          particle.move();
          particle.draw();
          particle.link();
        }
        window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);
    }
    raf();
  }, []);



  return (
    <div className="cengji">
      <canvas id="canvas"></canvas>
      <div className="getUserName">
        <div className="select-username">
          <h2>星速 Chat Room</h2>
          <form>
            <input
              v-model="username"
              placeholder="输入你的昵称..."
              onChange={(e) => validInput(e)}
            />
            {/* 跳转页面 */}
            <Link to={`/chat`} ><button disabled={isDisabled}> 确 定 </button> </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
