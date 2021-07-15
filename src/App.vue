
<template>
  <div class="container">

    <vue-tree
      style="width: 2000px; height: 2000px; border: 1px solid gray;position:center;" 
      :dataset="FirstVideo"
      :config="treeConfig"
      :linkStyle="straight"
    >
      <template v-slot:node="{ node, collapsed }">
        <div 
          class="Video-node"
          :style="{ border: collapsed ? '2px solid grey' : '' }">
          <span style="padding: 4px 0; font-weight: bold;">
            {{ node.id }}
          </span>
          <video
            width="180" height="130" 
            controls v-bind:src="node.video">
          </video>
          <a target="_blank" v-bind:href="PageURL" class="btn btn--yellow btn--circle"><span class="mgr1" >＋</span></a>
          <div id="detail"><button v-on:click="DETAIL">Detail</button></div>
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
        id: '0',
        video:'../system.mp4',
        children: [
          {

            id: '1',
            video:'',
            detail:'',
            children:[],
          },
          {
            id: '2',
            video:'',
            detail:'',
            children: [
              {
                id: '2.1',
                video:'',
                detail:'',
                children:[],
              }
            ]
          },
        ]
      },
      treeConfig: { nodeWidth: 250, nodeHeight: 150, levelHeight: 300 }
    }
  },
  methods:{
    DETAIL: function() {
      this.$modal.show('hello-world');
    },
    hide : function () {
      this.$modal.hide('hello-world');
    }
  },
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
