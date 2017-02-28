var game={
	RN:10,
	CN:10,
	box:document.getElementById("box"),
	cur:0,
	r:6,
	c:6,
	txt:document.getElementById("txt"),
	turnLeft(){
		this.cur-=90;
		this.box.style.transform="rotate("+this.cur+"deg)";		
	},
	turnRight(){
		this.cur+=90;
		this.box.style.transform="rotate("+this.cur+"deg)";
	},
	turnBack(){
		this.cur+=180;
		this.box.style.transform="rotate("+this.cur+"deg)";	
	},
	direction(){
		if(this.cur%360==-90||this.cur%360==270)
			return "left";
		else if(this.cur%360==90||this.cur%360==-270)
			return "right";
		else if(this.cur%360==0)
			return "top";
		else if(this.cur%360==-180||this.cur%360==180)
			return "bottom";
	},
	translateLeft(){
		if(this.c>1){
			this.c--;
			this.box.style.left=(this.c-1)*(50+1)+2+"px"
		}
	},
	translateRight(){
		if(this.c<this.CN){
			this.c++;
			this.box.style.left=(this.c-1)*(50+1)+2+"px"
		}
	},
	translateTop(){
		if(this.r>1){
			this.r--;
			this.box.style.top=(this.r-1)*(50+1)+2+"px"
		}
	},
	translateBottom(){
		if(this.r<this.RN){
			this.r++;
			this.box.style.top=(this.r-1)*(50+1)+2+"px"
		}
	},
	go(){
		switch(this.direction()){
			case "left":
				this.translateLeft();
				break;
			case "right":
				this.translateRight();
				break;
			case "top":
				this.translateTop()
				break;
			case "bottom":
				this.translateBottom()
				break;
		}
	},
	moveLeft(){
		switch(this.direction()){
			case "right":
				this.turnBack();
				break;
			case "top":
				this.turnLeft();
				break;
			case "bottom":
				this.turnRight();
				break;
		}
		this.go();
	},
	moveRight(){
		switch(this.direction()){
			case "left":
				this.turnBack();
				break;
			case "top":
				this.turnRight();
				break;
			case "bottom":
				this.turnLeft();
				break;
		}
		this.go();
	},
	moveTop(){
		switch(this.direction()){
			case "left":
				this.turnRight();
				break;
			case "right":
				this.turnLeft();
				break;
			case "bottom":
				this.turnBack();
				break;
		}
		this.go();
	},
	moveBottom(){
		switch(this.direction()){
			case "left":
				this.turnLeft();
				break;
			case "right":
				this.turnRight();
				break;
			case "top":
				this.turnBack();
				break;
		}
		this.go();
	},
	excute(){
		var order=this.txt.value;
		switch(order.toUpperCase()){
			case "GO":
				this.go();
				break;
			case "TUN LEF":
				this.turnLeft();
				break;
			case "TUN RIG":
				this.turnRight();
				break;
			case "TUN BAC":
				this.turnBack();
				break;
			case "TRA LEF":
				this.translateLeft();
				break;
			case "TRA RIG":
				this.translateRight();
				break;
			case "TRA TOP":
				this.translateTop();
				break;
			case "TRA BOT":
				this.translateBottom();
				break;
			case "MOV LEF":
				this.moveLeft();
				break;
			case "MOV RIG":
				this.moveRight();
				break;
			case "MOV TOP":
				this.moveTop();
				break;
			case "MOV BOT":
				this.moveBottom();
				break;
		}
	}		
}
document.getElementById("btn").onclick=game.excute.bind(game);
