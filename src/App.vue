
<template>
  <div class="container">

    <vue-tree
      style="width: 2000px; height: 2000px; border: 1px solid gray;position:center;" 
      :dataset="FirstVideo"
      :config="treeConfig"
      :collapse-enabled="collapse_enabled"
    >
      <template v-slot:node="{ node, collapsed }">
        <div 
          class="Video-node"
          :style="{ border: collapsed ? '2px solid grey' : '' }">

          <!-- ビデオ表示部分 -->
          <video
            width="180" height="130" 
            controls v-bind:src="node.video">
          </video>

          <!-- +ボタン -->
          <a target="_blank" class="btn btn--yellow btn--circle" @click="addVideo(node)"><span class="mgr1" >＋</span></a>

          <!-- detailボタン -->
          <div id="detail"><button v-on:click="DETAIL">Detail</button></div>

          <!-- modal -->
          <modal name="hello-world" :draggable="true" :resizable="true">
            <div class="modal-header">
              <h2>Modal title</h2>
            </div>
              <div class="modal-body">
                <p>you're reading this text in a modal!</p>
                <button v-on:click="hide">閉じる</button>
              </div>  
          </modal>
        </div>
      </template>
    </vue-tree>

  </div>
</template>


<script>
export default {
  name: 'treemap',
  data() {
    return {
      PageURL:'https://qiita.com/s_yasunaga/items/05e56fad4631f7bc7fe9',
      FirstVideo: {
        id: '1',
        video:'../system.mp4',
        children: [
          {
            id: '1.2',
            video:'',
            detail:'',
            children:[],
          },
          {
            id: '1.3',
            video:'',
            detail:'',
            children: [
              {
                id: '1.3.4',
                video:'',
                detail:'',
                children:[],
              }
            ]
          },
        ]
      },
      treeConfig: { nodeWidth: 250, nodeHeight: 150, levelHeight: 300 },
      collapse_enabled: false,
      nextNodeNumber: 5
    }
  },
  methods:{
    DETAIL: function() {
      this.$modal.show('hello-world');
    },
    hide : function () {
      this.$modal.hide('hello-world');
    },
    addVideo(node){

      // 新しく追加されるNode
      const newNode = {
        parent: node.id,
        id: this.nextNodeId,
        video: '../system.mp4',
        detail: '',
        children: []
      }

      // 次に作成されるNodeにつけるNumberの更新
      this.nextNodeNumber += this.nextNodeNumber;

      /* idによって追加する位置を変える

      // オブジェクトパスを変数に保存
      const ids = node.id.split('.');
      let nowPosition = this.FirstVideo;
      const check = 'children';
      console.log(nowPosition);
      for(let i=0; i<=ids.length; i++){
        // iと配列の長さが同じ -> そこが終着
        if(i===ids.length){
          this.FirstVideo[check].push(newNode);
          break;
        }
        for(let j=0; j<nowPosition.children.length; j++){
          // idが同じかどうか(正確にはidの１つの文字)
          if(ids[i] === this.FirstVideo){
            console.log('hoge')
          }
        }
      }

      */

     this.FirstVideo.children.push(newNode);
     console.log(this.FirstVideo.children);


    },
  },
  computed: {
  }
}
</script>

<style scoped lang="less">
.container {
  position:relative;
  display: 100px;
  flex-direction: column;
  align-items: center;
}

.Video-node {
  z-index:1;
  width: 180x;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: black;
  background-color: #dcdcdc;
  border-radius: 4px;
}

video{
  position: relative;
}


/*まずはお決まりのボックスサイズ算出をborer-boxに */
*,
*:before,
*:after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

html {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 62.5%;/*rem算出をしやすくするために*/
}

.btn,
a.btn,
button.btn {
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.5;
  position: relative;
  top:25px;
  left:41.5%;
  display: inline-block;
  padding: 1rem 4rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  letter-spacing: 0.1em;
  color: #212529;
  border-radius: 0.5rem;
}

.mgr1{
  margin-left: 2.5px;
}

a.btn--circle {
  border-radius: 50%;
  line-height: 30px;
  background-color:yellow;
  width: 30px;
  height: 30px;
  padding: 0;
  -webkit-box-shadow: 0 2.5px 0 #e6d900;
  box-shadow: 0 2.5px 0 #e6d900;
}

a.btn--circle:hover {
  -webkit-transform: translate(0, 1.5px);
  transform: translate(0, 1.5px);
  color:black;
  -webkit-box-shadow: 0 1px 0 #e6d900;
  box-shadow: 0 2px 0 #e6d900;
}

#detail >button{
  z-index:2;
  position: absolute;
  top:-11%;
  left:65%;
  appearance: none;
  border:1px solid;
  border-color: black;
  border-radius: 5px;
  background: #8ffd00;
}



</style>
