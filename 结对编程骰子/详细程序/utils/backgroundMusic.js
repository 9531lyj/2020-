/* 背景音乐
   貌似不能使用本地文件 */
const bgm = uni.createInnerAudioContext();
bgm.src = 'http://freetyst.nf.migu.cn/public/product9th/product44/2021/08/0301/2019%E5%B9%B410%E6%9C%8812%E6%97%A514%E7%82%B941%E5%88%86%E7%B4%A7%E6%80%A5%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5%E6%B5%B7%E8%9D%B6%E6%97%B6%E4%BB%A3%E6%95%B0%E7%A0%811%E9%A6%96/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_128_16_Stero/6008460GHZ5015103.mp3?channelid=02&msisdn=cb1fed6b-0643-4011-a97d-892e519b044b&Tim=1665401115280&Key=0a66095f0166aa4b'
bgm.loop = true;  //循环播放
bgm.autoplay = true;  //自动播放
bgm.sessionCategory = 'soloAmbient'; //在后台时不播放，如有其他播放，会暂停其他播放（但在移动端h5中 后台不播放失效）
bgm.volume = 0.6  //音量
var music = {
	//mute 表示是否是静音，默认静音
	playBgm({
		mute = false
	}) {
		if (!bgm) return;
		
		if (mute) {
			bgm.pause()
		} else {
			bgm.play()
		}
 
		bgm.onPause(() => {})
		bgm.onPlay(() => {})
		bgm.onError((res) => {console.log(res)})
	}
}
module.exports = music
