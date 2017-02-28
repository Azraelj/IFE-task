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
	go(){
		if(this.c>1){
			if(this.cur%360==-90||this.cur%360==270){
				this.c--;
				this.box.style.left=(this.c-1)*(50+1)+2+"px"
			}
		}
		if(this.c<this.CN){
			if(this.cur%360==90||this.cur%360==-270){
				this.c++;
				this.box.style.left=(this.c-1)*(50+1)+2+"px"
			}
		}
		if(this.r>1){
			if(this.cur%360==0){
				this.r--;
				this.box.style.top=(this.r-1)*(50+1)+2+"px"
			}
		}	
		if(this.r<this.RN){
			if(this.cur%360==-180||this.cur%360==180){
				this.r++;
				this.box.style.top=(this.r-1)*(50+1)+2+"px"
			}
		}
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
		}
	}
}
document.getElementById("btn").onclick=game.excute.bind(game);
