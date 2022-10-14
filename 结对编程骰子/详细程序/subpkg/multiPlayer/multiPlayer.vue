<template>
	<view class="singlePlayer" @click="move">
		<!-- 点击特效 -->
		<view v-show="isShow" class="mosare" :style="mosPosition">
			<image class="mosare-img" src="/static/img/click.png" mode=""></image>
		</view>
		<!-- 我方的骰子 -->
		<view class="top">
			<view class="dice" @click="diceClick(1)">
				<image class="dice-img" :src="mySrc"></image>
			</view>
			<view class="my">甲方</view>
		</view>
		<!-- 棋盘 -->
		<view class="middle">
			<view class="score score-left">{{ myScore }}</view>
			<view class="score score-right">{{ yourScore }}</view>
			<view class="game-body">
				<view class="dice-item" v-for="(item,index) in myDice" :key="index" @click="getDice(index,1)">
					<!-- <image class="dice-item-img" src="../../static/img/dice_static_2.png"></image> -->
					<!-- 数据格式为 __ob__: Observer 
						 原因:异步问题,数据未加载完成就进行渲染
						 解决方法: 1.获取数据的时候用promise.then解构
							      2.用JSON.parse(JSON.stringify())进行转码并重新解码可以使用数据 -->
					{{ JSON.parse(JSON.stringify(myDice))[index] }}
				</view>
			</view>
			<view class="game-body">
				<view class="dice-item" v-for="(item,index) in yourDice" :key="index" @click="getDice(index,2)">
					{{ JSON.parse(JSON.stringify(yourDice))[index] }}
				</view>
			</view>
		</view>
		<!-- 对方的骰子 -->
		<view class="bottom">
			<view class="dice" @click="diceClick(2)">
				<image class="dice-img" :src="yourSrc"></image>
			</view>
			<view class="your">乙方</view>
		</view>
		<!-- 选择先手弹出层 -->
		<uni-popup ref="popup" :mask-click="false" type="center">
			<view class="choose-item">
				<button @click="julioCruz(1)">
					<image class="choose-img" src="/static/img/jia-bout.png"></image>
				</button>
				<button @click="julioCruz(2)">
					<image class="choose-img" src="/static/img/yi-bout.png"></image>
				</button>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 是否为我方行动
				myAction: true,
				// 是否可以摇骰子
				OPlay: true,
				// 我方骰子图片
				mySrc: '/static/img/dice_1.gif',
				// 记录我方棋盘点数
				myDice: [0,0,0,0,0,0,0,0,0],
				// 我方摇到的骰子数
				myPoint: 0,
				// 我方得分
				myScore: 0,
				// 记录对方棋盘点数
				yourDice: [0,0,0,0,0,0,0,0,0],
				// 对方摇到的骰子数
				yourPoint: 0,
				// 对方骰子图片
				yourSrc: '/static/img/dice_1.gif',
				// 对方得分
				yourScore: 0,
				mos_x: 50,
				mos_y: 50,
				isShow: false
			};
		},
		
		onLoad() {
			this.$refs.popup.open()
		},
		
		methods: {
			// 鼠标点击获取坐标
			move(e) {
				this.isShow = true;
				this.mos_x = e.touches[0].pageX;
				this.mos_y = e.touches[0].pageY;
				setTimeout(() => {
				  this.isShow = false
				}, 250);
			},
			// 生成随机数
			rand(min,max) {
				if (min > max) {
					let mid = min;
					min = max;
					max = mid;
				}
				return parseInt(Math.random() * (max - min + 1) + min);
			},
			// 点击骰子
			diceClick(i) {
				// 如果可以点击,则根据传入数字判断哪个骰子转动,1是我方，2是对方
				// 根据 myAction 判断是否到我方行动回合了，否则提示未到行动回合
				// 如果不能点击则说明已经摇过骰子并未选择位置
				if (this.OPlay) {
					if (i == 1 && this.myAction) {
						// 将点击状态设为否，防止多次点击，等玩家选完位置再设为true
						this.OPlay = false
						// 随机一个点数,并用myPoint记录,我方骰子gif随机切换为摇出点数的图片
						this.myPoint = this.rand(1,6)
						// 切换 gif 图片时未重新播放
						// 原因：图片路径未发生变化，浏览器缓存了，不会重载播放图片
						// 解决方法：路径后面用?跟一个随机数或者时间戳
						this.mySrc = "/static/img/dice_" + this.myPoint + ".gif?" + new Date().getTime()
					} else if (i == 2 && !this.myAction) {
						this.OPlay = false
						this.yourPoint = this.rand(1,6)
						this.yourSrc = "/static/img/dice_" + this.yourPoint + ".gif?" + new Date().getTime()
					} else {
						uni.showToast({
						    title: '还没轮到行动回合',
						    icon: 'none',
						    duration: 1000 // 持续的时间
						})
					}
				} else {
					uni.showToast({
					    title: '请先选定位置',
					    icon: 'none',
					    duration: 1000 // 持续的时间
					})
				}
			},	
			// 点击棋盘
			getDice(index,i) {
				// 摇过骰子且未选择位置才能点击选择位置
				// 同样需判断是否到我方行动回合
				if (!this.OPlay) {
					if (i == 1 && this.myAction) {
						// 判断该位置是否已经存在数据
						if (this.myDice[index] == 0) {
							this.OPlay = true
							this.myDice[index] = this.myPoint
							this.myAction = false
							this.eliminate(index,1)
							uni.showToast({
							    title: '轮到乙方行动',
							    icon: 'none',
							    duration: 1000 // 持续的时间
							})
						} else {
							uni.showToast({
							    title: '不能选择该位置',
							    icon: 'none',
							    duration: 1000 // 持续的时间
							})
						}
					} else if (i == 2 && !this.myAction) {
						if (this.yourDice[index] == 0) {
							this.OPlay = true
							this.yourDice[index] = this.yourPoint
							this.myAction = true
							this.eliminate(index,2)
							uni.showToast({
							    title: '轮到甲方行动',
							    icon: 'none',
							    duration: 1000 // 持续的时间
							})
						} else {
							uni.showToast({
							    title: '不能选择该位置',
							    icon: 'none',
							    duration: 1000 // 持续的时间
							})
						}
					} else {
						uni.showToast({
						    title: '还没轮到行动回合',
						    icon: 'none',
						    duration: 1000 // 持续的时间
						})
					}
				} else {
					uni.showToast({
					    title: '请先摇骰子',
					    icon: 'none',
					    duration: 1000 // 持续的时间
					})
				}	
				// this.myImg[index] = "../../static/img/dice_static_" + this.myPoint + ".png"
			},
			// 消除规则
			eliminate(index,i) {
				// js除出来是浮点数,需用 parseInt取整数
				const x = parseInt(index / 3) 
				if (i == 1) {
					// 遍历查找对方同一行是否存在相同数字,若存在则置0消除
					for (let i = 0; i < 3; i ++) {
						if (this.myDice[index] == this.yourDice[(x*3)+i]) {
							this.yourDice[(x*3)+i] = 0
						}	
					}
				} else {
					for (let i = 0; i < 3; i ++) {
						if (this.yourDice[index] == this.myDice[(x*3)+i]) {
							this.myDice[(x*3)+i] = 0
						}	
					}
				}
				// 消除结束计算分数
				this.myScore = this.getScore(this.myDice)
				this.yourScore = this.getScore(this.yourDice)
				// 计算是否结束游戏
				this.winer(this.myDice)
				this.winer(this.yourDice)
			},
			// 分数结算
			getScore(arr) {
				// 记录总分
				let count = 0
				for (let i = 0; i < 3; i ++) {
					// arr 为 __ob__: Observer 格式数据,需转码
					// 循环切割数组,分别计算每一行分数
					let newArr = JSON.parse(JSON.stringify(arr)).splice(i*3, 3)
					// 获得各个数字出现次数的对象
					const pointCount = newArr.reduce((obj, point) => { 
						if (point in obj) {
							obj[point] ++
						} else {
							obj[point] = 1
						}
						return obj
					}, {})
					// 通过键值对来计算得分
					// key: 数字,需转为数字
					// value: 出现次数
					for (let point in pointCount) {
						count += parseInt(point) * Math.pow(pointCount[point],2)
					}
				}
				return count
			},
			// 胜负判断
			winer(arr) {
				// showModal 是微信小程序封装过的组件,this指向改变,需提前用变量存储才能使用
				const that = this
				if (arr.indexOf(0) == '-1') {
					if (this.myScore > this.yourScore) {
						uni.showModal({
						    title: '恭喜甲方获得胜利',
							success(res) {
							    if (res.confirm) {// 确定
							        that.reset()
							    } else {// 取消
							        return
							    }
							}
						})
					} else if (this.myScore < this.yourScore) {
						uni.showModal({
						    title: '恭喜乙方获得胜利',
							success(res) {
							    if (res.confirm) {// 确定
							        that.reset()
							    } else {// 取消
							        return
							    }
							}
						})
					} else {
						uni.showModal({
						    title: '棋逢对手,你们平局了',
							success(res) {
							    if (res.confirm) {// 确定
							        that.reset()
							    } else {// 取消
							        return
							    }
							}
						})
					}
					// 重置游戏
					// this.reset()
				}
			},
			// 重置游戏
			reset() {
				this.mySrc = '/static/img/dice_1.gif',
				this.myDice = [0,0,0,0,0,0,0,0,0],
				this.myPoint = 0,
				this.myScore = 0,
				this.yourDice = [0,0,0,0,0,0,0,0,0],
				this.yourPoint = 0,
				this.yourSrc = '/static/img/dice_1.gif',
				this.yourScore = 0
				this.$refs.popup.open()
			},
			// 选择先手
			julioCruz(i) {
				if (i == 1) {
					this.myAction = true
				} else{
					this.myAction = false
				}
				// 点击之后手动关闭遮罩层
				this.$refs.popup.close()
			}
		},
		
		computed: {
			// 计算特效盒子出现位置
			mosPosition: function() {
				return "left:" + (this.mos_x - 10) + "px;top:" + (this.mos_y - 10) + "px";
			}
		}
	}
</script>

<style lang="scss">
.singlePlayer {
	position: relative;
	height: 100vh;
	background: url('http://gd-hbimg.huaban.com/4e1849fe321ff056f6566d70b1c90e1892154bb511c72-ILL0hJ_fw658');
	background-repeat: no-repeat;
	background-size: cover;
	background-attachment: fixed;
	background-position: center; 
	.mosare {
		width: 70px;
		height: 70px;
		background-color: rgba(0, 0, 0, 0);
		border-radius: 50%;
		position: absolute;
		animation: mosare 0.25s forwards;
		.mosare-img {
			margin-left: -24px;
			margin-top: -24px;
			height: 100%;
			width: 100%;
		}
	}
	@keyframes mosare {
		0% {
			width: 50px;
			height: 50px;
			opacity: 0.2;
		}
		50% {
			width: 70px;
			height: 70px;
			opacity: 1;
		}
		99% {
			width: 50px;
			height: 50px;
			opacity: 0.5;
		}
		100% {
			width: 0;
			height: 0;
		}
	}
	.top {
		height: 10%;
		padding: 4%;
		.my {
			height: 60px;
			width: 60px;
			margin-left: 24vw;
			float: left;
			font-size: 22px;
			font-family: cursive;
			font-weight: 600;
			line-height: 60px;
		}
		.dice {
			float: left;
			height: 60px;
			width: 60px;
			border-radius: 8px;
			border: 1px solid #333;
			.dice-img {
				width: 60px;
				height: 60px;
			}
		}
	}
	.middle {
		height: 69%;
		.score {
			height: 64px;
			width: 64px;
			border: 1px solid #333;
			border-radius: 10px;
			background-color: #333;
			color: #fff;
			font-size: 30px;
			text-align: center;
			line-height: 60px;
		}
		.score-left {
			float: left;
			margin: 28vh 0 0 3vw;
		}
		.score-right {
			float: right;	
			margin: 28vh 3vw 0 0;
		}
		.game-body {
			margin: 0 auto;
			margin-bottom: 15px;
			height: 200px;
			width: 200px;
			border-radius: 10px;
			.dice-item {
				float: left;
				margin: 0 2px 2px 0;
				width: 64px;
				height: 64px;
				border-radius: 10px;
				background: #333;
				line-height: 60px;
				text-align: center;
				font-size: 30px;
				color: #fff;
				.dice-item-img {
					height: 60px;
					width: 60px;
					margin: 2px;
					border-radius: 10px;
				}
			}
		}
	}
	.bottom {
		height: 10%;
		padding: 4%;
		.your {
			height: 60px;
			width: 60px;
			margin-right: 20vw;
			float: right;
			font-size: 22px;
			font-family: cursive;
			font-weight: 600;
			line-height: 60px;
		}
		.dice {
			float: right;
			height: 60px;
			width: 60px;
			border-radius: 8px;
			border: 1px solid #333;
			.dice-img {
				width: 60px;
				height: 60px;
			}
		}
	}
}
.choose-item {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 380px;
	width: 240px;
	background-color: rgba(0, 0, 0, 0);
	button {
		margin: 0 auto;
		width: 180px;
		height: 180px;
		text-align: center;
		line-height: 120px;
		background-color: rgba(0,0,0,0);
		.choose-img {
			width: 100%;
			height: 85%;
		}
	}
	button::after {
		border: none;
	}
}
</style>
