<template>
	<view class="home" @click="move">
		<!-- 点击特效 -->
		<view v-show="isShow" class="mosare" :style="mosPosition">
			<image class="mosare-img" src="/static/img/click.png" mode=""></image>
		</view>
		<!-- 标题 -->
		<view class="title">
			<button class="background-music" @click="musicBtn" type="default">
				<image class="voice-img" :src="muteBgMusic ? '/static/img/mute.png' : '/static/img/voice.png'"></image>
			</button>
			<image class="title-img" src="/static/img/title.png"></image>
		</view>
		<!-- 各个游戏按钮 -->
		<view class="button">
			<!-- hover-class="none" : 清除点击高亮 -->
			<navigator hover-class="none" url="/subpkg/singlePlayer/singlePlayer">
				<button class="btn">
					<image class="btn-img" src="/static/img/man-machine.png"></image>	
				</button>
			</navigator>
			<navigator hover-class="none" url="/subpkg/multiPlayer/multiPlayer">
				<button class="btn">
					<image class="btn-img" src="/static/img/multi.png"></image>
				</button>
			</navigator>
			<navigator hover-class="none" url="/subpkg/setting/setting">
				<button class="btn">
					<image class="btn-img" src="/static/img/rule.png"></image>
				</button>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				muteBgMusic: false,
				mos_x: 50,
				mos_y: 50,
				isShow: false
			};
		},
		
		onLoad() {
			// 播放背景音乐
			this.$music.playBgm({ mute:false })
		},
		
		methods: {
			//关闭或开启 音乐 
			musicBtn() {
			    this.muteBgMusic = !this.muteBgMusic     
			    if (this.muteBgMusic) {
			        // 开启静音
			        this.$music.playBgm({ mute:true })
			    } else {
			        // 关闭静音
			        this.$music.playBgm({ mute:false })
			    }
			},
			// 鼠标点击获取坐标
			move(e) {
				// console.log(e)
				this.isShow = true;
				this.mos_x = e.touches[0].pageX;
				this.mos_y = e.touches[0].pageY;
				setTimeout(() => {
				  this.isShow = false
				}, 250);
			},
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
.home {
	position: relative;
	width: 100vw;
	height: 100vh;
	// background-image 不能加载本地资源文件
	// 解决方法:
	// 1.转为base64格式
	// 2.直接用互联网图片地址
	// 3.用image标签
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
	.title {
		position: relative;
		text-align: center;     
		vertical-align: middle;
		.background-music {
			position: absolute;
			top: 2vw;
			right: 3vw;
			width: 16vw;
			height: 16vw;
			background-color: rgba(0,0,0,0);
			.voice-img {
				width: 150%;
				height: 100%;
			}
		}
		// 去除按钮默认边框
		.background-music::after {
		  border: none;
		}
		.title-img {
			width: 80%;
			margin-top: -3vh;
		}
	}
	.button {
		margin-top: -5vh;
		.btn {
			width: 80vw;
			height: 11vh;
			margin-bottom: 3vh;
			// 背景设置为透明,不能用opacoty: 0;因为该设置会让整个按钮包括内部图片文字都设为透明
			background-color: rgba(0, 0, 0, 0);
			// opacity: 0;
			border: 0px;
			.btn-img {
				margin-top: -14vh;
				width: 100%;
			}
		}
		// 去除按钮默认边框
		.btn::after {
		  border: none;
		}
	}
}
</style>
