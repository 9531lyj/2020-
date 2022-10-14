<template>
	<view class="setting" @click="move">
		<!-- 点击特效 -->
		<view v-show="isShow" class="mosare" :style="mosPosition">
			<image class="mosare-img" src="/static/img/click.png" mode=""></image>
		</view>
		<view class="rule-info">1.初始盘面</view>
		<image class="rule-img" src="https://s1.328888.xyz/2022/09/21/Ijkdj.png" data-src="https://s1.328888.xyz/2022/09/21/Ijkdj.png" @click="pictureview($event)"></image>
		<view class="rule-info">2.轮流掷骰</view>
		<image class="rule-img" src="https://s1.328888.xyz/2022/09/21/Ij9fK.png" data-src="https://s1.328888.xyz/2022/09/21/Ij9fK.png" @click="pictureview($event)"></image>
		<view class="rule-info">3.消除规则</view>
		<image class="rule-img" src="https://s1.328888.xyz/2022/09/21/IjKnm.png" data-src="https://s1.328888.xyz/2022/09/21/IjKnm.png" @click="pictureview($event)"></image>
		<view class="rule-info">4.结算规则</view>
		<image class="rule-img" src="https://s1.328888.xyz/2022/09/21/Ijo07.png" data-src="https://s1.328888.xyz/2022/09/21/Ijo07.png" @click="pictureview($event)"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 图片列表
				imgList: [
					"https://s1.328888.xyz/2022/09/21/Ijkdj.png",
					"https://s1.328888.xyz/2022/09/21/Ij9fK.png",
					"https://s1.328888.xyz/2022/09/21/IjKnm.png",
					"https://s1.328888.xyz/2022/09/21/Ijo07.png"
				],
				mos_x: 50,
				mos_y: 50,
				isShow: false
			};
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
			// 预览图片
			pictureview(e) {
			    const src = e.currentTarget.dataset.src;//获取data-src
			    wx.previewImage({
					current: src, // 当前显示图片的http链接
					urls: this.imgList // 需要预览的图片http链接列表
			    })
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
.setting {
	position: relative;
	height: 100vh;
	width: 100vw;
	background: url('http://gd-hbimg.huaban.com/4e1849fe321ff056f6566d70b1c90e1892154bb511c72-ILL0hJ_fw658');
	background-repeat: no-repeat;
	background-size: cover;
	background-attachment: fixed;
	background-position: center; 
	// 多余隐藏显示滚动条
	overflow-x: hidden;
	overflow-y: scroll;
	outline: none;
	// 图片居中
	vertical-align: middle;
	display: table-cell;
	text-align: center;
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
	.rule-img {
		height: 200px;
		margin-top: 6px;
		
	}
	.rule-info {
		margin-top: 10px;
		text-align: left;
		font-family: cursive;
		font-size: 20px;
		font-weight: 800
	}
}
</style>
