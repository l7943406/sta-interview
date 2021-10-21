<template>
  <div class="schedule">
    <!-- el-row 响应式布局容器 -->
    <el-row class="schedule_row">
      <!-- 布局内容 -->
      <el-col :xs="{span:24,offset:0}"
              :sm="{span:20,offset:2}"
              :md="{span:16,offset:4}"
              :lg="{span:12,offset:6}"
              :xl="{span:8,offset:8}">
        <!-- 主体 -->
        <el-card class="box-card">

          <div slot="header" class="box-card-header">
            <div class="schedule_steps" style="width: 100%;">
              <!-- 步骤条 -->
              <el-steps  :active="active" finish-status="success">
                <el-step title="报名"></el-step>
                <el-step title="一面"></el-step>
                <el-step title="二面"></el-step>
                <el-step title="结果" :status="interviewResult"></el-step>
              </el-steps>
            </div>
          </div>

          <!-- 主体内容响应式 -->
          <el-col :xs="{span:24,offset:0}"
                  :sm="{span:20,offset:2}"
                  :md="{span:18,offset:3}"
                  :lg="{span:18,offset:3}"
                  :xl="{span:16,offset:4}">
            <div class="schedule_body">

              <!-- 报名时显示 -->
              <div v-if="active === 0">

                  <el-form ref='registerForm'
                           :model='registerForm.data'
                           :rules='registerForm.rule'
                           label-position='right'
                           label-width="auto">

                    <el-form-item label="方向" prop="direction">
                      <el-select v-model="registerForm.data.direction" class="direction-select">
                        <el-option value="0" label="软件科技协会"></el-option>
                        <el-option value="1" label="ACM算法队"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="学号" prop="stuId" disabled>
                      <el-input v-model="registerForm.data.stuId" placeholder="请输入学号" disabled>

                      </el-input>
                    </el-form-item>
                    <el-form-item label="姓名" prop="name">
                      <el-input v-model="registerForm.data.name" placeholder="请输入真实姓名" disabled>

                      </el-input>
                    </el-form-item>
                    <el-form-item label="班级" prop="stuClass">
                      <el-input v-model="registerForm.data.stuClass" placeholder="请输入班级">

                      </el-input>
                    </el-form-item>


                    <el-form-item label="电话" prop="phone">
                      <el-input v-model="registerForm.data.phone" placeholder="请输入电话号码">

                      </el-input>
                    </el-form-item>

                    <el-button class="register-submit"
                               type="primary"
                               @click="doRegisterSubmit">
                      报名
                    </el-button>
                  </el-form>
              </div>

              <!-- 一面 -->
              <div v-if="active === 1">
                <div v-if="interviewResult1 === ''">
                  <el-form ref='reserveForm1'
                           :model='reserveForm1.data'
                           :rules='reserveForm1.rule'
                           label-position='right'
                           label-width="auto">
                    <el-form-item label="学号" prop="stuId">
                      <el-input v-model="reserveForm1.data.stuId" placeholder="请输入学号" disabled>

                      </el-input>
                    </el-form-item>
                    <el-form-item label="姓名" prop="name">
                      <el-input v-model="reserveForm1.data.name" placeholder="请输入真实姓名" disabled>

                      </el-input>
                    </el-form-item>
                    <el-form-item label="面试时间" prop="interviewId">
                      <el-select v-model="reserveForm1.data.interviewId" style="width: 100%">
                        <el-option v-for="item in reserveForm1.option" :key="item" :label="item.dateTime" :value="item.id"></el-option>
                      </el-select>
                    </el-form-item>

                    <el-button class="register-submit"
                               type="primary"
                               @click="doReserve1Submit">
                      预约
                    </el-button>
                  </el-form>
                </div>

                <div v-if="interviewResult1 === '正在进行'" style="text-align: left;padding: 5% 0;font-size: 20px">
                  <h1>一面中...</h1>
                  <p>我们会短信通知你面试时间地点</p>
                  <p>请准时前往指定教室参加面试</p>
                  <p>期待你的出色发挥</p>
                  <p style="text-align: right">——软件科技协会</p>
                </div>

              </div>


              <!-- 二面 -->
              <div v-if="active === 2">
                <div v-if="interviewResult2 === ''">
                  <el-form ref='reserveForm2'
                           :model='reserveForm2.data'
                           :rules='reserveForm2.rule'
                           label-position='right'
                           label-width="auto">
                    <el-form-item label="学号" prop="stuId">
                      <el-input v-model="reserveForm2.data.stuId" placeholder="请输入学号" disabled>

                      </el-input>
                    </el-form-item>
                    <el-form-item label="姓名" prop="name">
                      <el-input v-model="reserveForm2.data.name" placeholder="请输入真实姓名" disabled>

                      </el-input>
                    </el-form-item>
                    <el-form-item label="面试时间" prop="interviewId">
                      <el-select v-model="reserveForm2.data.interviewId" style="width: 100%">
                        <el-option v-for="item in reserveForm2.option" :key="item" :label="item.dateTime" :value="item.id"></el-option>
                      </el-select>
                    </el-form-item>

                    <el-button class="register-submit"
                               type="primary"
                               @click="doReserve2Submit">
                      预约
                    </el-button>
                  </el-form>
                </div>

                <div v-if="interviewResult2 === '正在进行'" style="text-align: left;padding: 5% 0;font-size: 20px">
                  <h1>二面中...</h1>
                  <p>我们会短信通知你面试时间地点</p>
                  <p>请准时前往指定教室参加面试</p>
                  <p>期待你的出色发挥</p>
                  <p style="text-align: right">——软件科技协会</p>
                </div>

              </div>


              <!-- 面试结果显示 -->
              <div v-if="active === 3 || active===4">
                <div v-if="interviewResult === 'error'"  style="text-align: left;padding: 5% 0;font-size: 20px">
                  <h3 v-text="'亲爱的 ' + this.$store.state.name + ' 同学：'" style="color:#000;font-weight: 1000"></h3>
                  <p>很遗憾，经过慎重的考虑和评估，你<a style="color: indianred;font-weight: 700"> 未能通过 </a>本轮面试。</p>
                  <p>对你在面试过程中所表现出来的认真努力的态度，我们表以真诚的赞赏。希望你能继续努力，我们高处见！</p>
                  <p>感谢你选择并参加软件科技协会纳新面试！</p>
                  <p style="text-align: right">——软件科技协会</p>
                </div>


                <div v-if="interviewResult === 'success'"  style="text-align: left;padding: 9% 0;font-size: 20px">
                  <h3 v-text="'亲爱的 ' + this.$store.state.name + ' 同学：'" style="color:#000;font-weight: 1000"></h3>
                  <p>你好呀，我是软件科技协会人力资源部胡图图~</p>
                  <p>很高兴告知你<a style="color: forestgreen;font-weight: 700"> 面试通过 </a>，恭喜你成为软件科技协会的一员！</p>
                  <p>后续相关事宜将通过短信通知你，请注意查收。</p>
                  <p style="text-align: right">——软件科技协会</p>
                </div>
              </div>

              <!-- 错误页 -->
              <div v-if="active === -2">
                <div  style="text-align: left;padding: 5% 0;font-size: 20px">
                  出错啦，你可以尝试 <el-link type="primary" @click="reload"> 刷新本页面 </el-link> 或者 <el-link type="primary" @click="back"> 回到主页 </el-link>
                </div>
              </div>
            </div>


          </el-col>
          <!-- 右下角内容 -->
          <div style="right: 15px; bottom: 10px;position: absolute">
            <el-link v-if="active > 0 && active < 3"
                     :underline="false"
                     class="el-icon-user"
                     style="font-size: 18px;padding-bottom: 10px"
                     @click="showUserInfoDialog"
                     type="primary">报名信息</el-link>
            <br>
            <el-link v-if="active === 1 && interviewResult1 === '正在进行'"
                     :underline="false"
                     @click="interviewQuestions"
                     class="el-icon-download"
                     style="font-size: 18px;padding-bottom: 10px"
                     type="warning">面试题下载</el-link>
          </div>

        </el-card>
      </el-col>
    </el-row>

    <!-- 报名信息dialog -->
    <el-dialog @close="userInfoDialog = false"
               :width="'350px'"
               custom-class="userInfoDialogClass"
               :title="'报名信息'"
               :visible="userInfoDialog">
      <div v-html="userInfo" style="line-height: 10px;margin-left: 10%;color: #303133;font-size: 18px;"></div>
    </el-dialog>


    <!-- 验证码dialog -->
    <el-dialog class="verify"
               @close="verifyCallback = ''"
               :width="'340px'"
               :title="'拖动下方滑块完成拼图'"
               :visible="typeof verifyCallback === 'function'">
      <slide-verify :l="42"
                    :r="10"
                    :w="300"
                    :h="155"
                    ref="refresh"
                    slider-text="向右滑动"
                    :imgs="img"
                    @success="onSuccess"
                    @fail="onFail"
                    @refresh="onRefresh"
      ></slide-verify>
    </el-dialog>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: 'Schedule',
  data() {
    return {
      img: [],
      userInfoDialog: false,
      userInfo:'',
      verifyCallback: '',
      active: -1,
      interviewResult: '',
      interviewResult1: '',
      interviewResult2: '',
      registerForm: {
        data: {
          direction: '',
          stuId: '',
          name: '',
          stuClass: '',
          phone: ''
        },
        rule: {
          direction: [
            {required: true, message: '请选择方向', trigger: 'blur'},
          ],
          stuId: [
            {required: true, message: '请输入学号', trigger: 'blur'},
            {pattern: '^([0-9]{8})$', message: '学号为8位数字', trigger: 'blur'}
          ],
          name: [
            {required: true, message: '请输入姓名', trigger: 'blur'},
            {
              min: 2,
              max: 10,
              pattern: "^((?![\\u3000-\\u303F])[\\u2E80-\\uFE4F]|·)*(?![\\u3000-\\u303F])[\\u2E80-\\uFE4F](·)*$",
              message: '姓名为2-10位汉字,请输入正确的姓名',
              trigger: 'blur'
            }
          ],
          stuClass: [
            {required: true, message: '请输入班级', trigger: 'blur'},
            {min: 2, max: 32, message: '班级2-32位,请输入正确的班级信息', trigger: 'blur'}
          ],
          phone: [
            {required: true, message: '请输入电话号码', trigger: 'blur'},
            {pattern: "^1(3[0-9]|5[0-3,5-9]|7[1-3,5-8]|8[0-9])\\d{8}$", message: '请输入正确的电话号码!', trigger: 'blur'}
          ],
        }
      },
      reserveForm1: {
        data: {
          interviewId: '',
          name: '',
          stuId: ''
        },
        rule: {
          stuId: [
            {required: true, message: '请输入学号', trigger: 'blur'},
            {pattern: '^([0-9]{8})$', message: '学号为8位数字', trigger: 'blur'}
          ],
          name: [
            {required: true, message: '请输入姓名', trigger: 'blur'},
            {
              min: 2,
              max: 10,
              pattern: "^((?![\\u3000-\\u303F])[\\u2E80-\\uFE4F]|·)*(?![\\u3000-\\u303F])[\\u2E80-\\uFE4F](·)*$",
              message: '姓名为2-10位汉字,请输入正确的姓名',
              trigger: 'blur'
            }
          ],
          interviewId: [
            {required: true, message: '请选择面试场次', trigger: 'blur'},
          ],
        },
        option: []
      },
      reserveForm2: {
        data: {
          interviewId: '',
          name: '',
          stuId: ''
        },
        rule: {
          stuId: [
            {required: true, message: '请输入学号', trigger: 'blur'},
            {pattern: '^([0-9]{8})$', message: '学号为8位数字', trigger: 'blur'}
          ],
          name: [
            {required: true, message: '请输入姓名', trigger: 'blur'},
            {
              min: 2,
              max: 10,
              pattern: "^((?![\\u3000-\\u303F])[\\u2E80-\\uFE4F]|·)*(?![\\u3000-\\u303F])[\\u2E80-\\uFE4F](·)*$",
              message: '姓名为2-10位汉字,请输入正确的姓名',
              trigger: 'blur'
            }
          ],
          interviewId: [
            {required: true, message: '请选择面试场次', trigger: 'blur'},
          ],
        },
        option: []
      }
    }
  },
  mounted() {
    for (let i = 0; i < 100; i++) {
      this.img.push('http://chat-image.muchen7.cn/random/'+ Math.floor(Math.random()*99) +'.jpg')
    }

    this.registerForm.data.stuId = this.$store.state.stuId
    this.registerForm.data.name = this.$store.state.name

    if (this.registerForm.data.stuId === '' || this.registerForm.data.name === '') {
      this.$router.push('/login')
    }
    this.doInit()
  },
  methods: {
    //路由 login
    back(){
      this.$router.push('/login')
    },
    //刷新本页面
    reload(){
      location.reload()
    },
    //新标签页打开面试题下载页
    interviewQuestions(){
      window.open('http://chat-image.muchen7.cn/questions.pdf', '_blank');
    },
    //个人信息展示
    async showUserInfoDialog(){
      let userInfo = await this.getUserInfo(this.$store.state.name, this.$store.state.stuId)
      let s = ""
      s += "<p>姓名&nbsp; :&nbsp;  " + userInfo['items'].name + "</p><br>"
      s += "<p>学号&nbsp; :&nbsp;  " + userInfo['items'].stuId + "</p><br>"
      s += "<p>班级&nbsp; :&nbsp;  " + userInfo['items'].stuClass + "</p><br>"
      s += "<p>电话&nbsp; :&nbsp;  " + userInfo['items'].phone + "</p><br>"
      s += "<p>方向&nbsp; :&nbsp;  " + userInfo['items'].direction + "</p>"
      this.userInfo = s;
      this.userInfoDialog = true;
    },
    //二面预约 ***点击按钮时 先validate 在启用验证码，验证通过时回调Submit***
    doReserve2Submit(){
      this.$refs["reserveForm2"].validate((valid) => {
        if (valid) {
          this.verifyCallback = this.reserve2Submit
        }
      })
    },
    //一面预约 ***点击按钮时 先validate 在启用验证码，验证通过时回调Submit***
    doReserve1Submit(){
      this.$refs["reserveForm1"].validate((valid) => {
        if (valid) {
          this.verifyCallback = this.reserve1Submit
        }
      })
    },
    //报名 ***点击按钮时 先validate 在启用验证码，验证通过时回调Submit***
    doRegisterSubmit(){
      this.$refs["registerForm"].validate((valid) => {
        if (valid) {
          this.verifyCallback = this.registerSubmit
        }
      })
    },
    //验证码验证成功回调
    onSuccess(){
      if(typeof this.verifyCallback === 'function'){
        this.verifyCallback();
        this.verifyCallback = '';
        this.$store.commit("setCount", 0);
        this.onRefresh()
      }
    },
    //验证码验证失败回调
    onFail(){
      this.$message({
        type : 'error',
        message : '验证失败，请重新验证'
      })
      this.verifyCallback = '';
    },
    //验证码 通过父容器刷新
    onRefresh(){
      this.$refs.refresh.reset();
    },
    async doInit(){
      let count = this.$store.state.count
      if(count > 8){
        this.verifyCallback = this.init
      }else{
        await this.init()
      }
    },
    //页面init操作 通过init加载页面逻辑
    /*
      level
      0 报名
      1 预约
      2 一面中
      3 预约
      4 二面中
      5 面试未通过
      6 面试已通过
    * */
    async init() {
      if(this.$store.state.count > 8){
        this.$store.commit("setCount", 0);
      }else{
        this.$store.commit("setCount", Number(this.$store.state.count) + 1);
      }

      let userInfo = await this.getUserInfo(this.registerForm.data.name, this.registerForm.data.stuId);
      this.active = userInfo.items.level
      switch (this.active) {
        // 报名无初始化步骤 直接break
        case 0: break;
        case 1:
          this.reserve1Init();
          break;
        case 2:
          this.loading1Init(userInfo);
          break;
        case 3:
          this.reserve2Init();
          break;
        case 4:
          this.loading2Init(userInfo);
          break;
        case 5:
          this.active = 3
          this.interviewResult = 'error'
          break;
        case 6:
          this.active = 4
          this.interviewResult = 'success'
          break;
        default: {
          this.$message({
            type: "error",
            message: '出错啦'
          })
          await this.$router.push('/login')
        }
      }
    },
    //同步获取userinfo 加载失败 active置-2 进入错误页
    async getUserInfo(name, stuId) {
      let result = ''
      await axios({
        method: 'post',
        url: '/enrollservice/enrollstu/findStudent',
        data: {
          name,
          stuId
        }
      }).then(res => {
        if (res.data.code === 20000) {
          result = res.data.data
        } else {
          this.$message({
            type: "error",
            message: res.data.data.items
          })
          this.active = -2;
        }
      }).catch(() => {
        this.$message({
          type: "error",
          message: '请求出错,请尝试刷新本页面'
        })
        this.active = -2;
      })
      return result
    },
    // 报名 提交
    registerSubmit() {
      this.$refs["registerForm"].validate((valid) => {
        if (valid) {
          let form = this.registerForm.data;
          axios({
            method: 'post',
            url: '/enrollservice/enrollstu/addStudent',
            data: (form)
          }).then(res => {
            //验证是否报名成功
            if (res.data.success) {
              this.$message({
                type: "success",
                message: "报名成功啦!!!"
              })
              this.reserve1Init()
            } else {
              this.$message({
                type: "error",
                message: res.data.data['items']
              })
              location.reload()
            }
          }).catch(() => {
            this.$message({
              type: "error",
              message: '请求出错,请尝试刷新本页面'
            })
          })
        }
      })
    },
    // 预约一面 提交
    reserve1Submit() {
      this.$refs["reserveForm1"].validate((valid) => {
        if (valid) {
          let form = this.reserveForm1.data;
          axios({
            method: 'post',
            url: '/enrollservice/enrollstu/reserve',
            data: (form)
          }).then(res => {
            //验证是否预约成功
            if (res.data.success) {
              this.$message({
                type: "success",
                message: "预约成功啦，请等待短信通知"
              })
              this.active = 1
              this.interviewResult1 = '正在进行'
            } else {
              this.$message({
                type: "error",
                message: res.data.data['items']
              })
            }
          }).catch(() => {
            this.$message({
              type: "error",
              message: '请求出错,请尝试刷新本页面'
            })
          })
        }
      })
    },
    // 预约二面 提交
    reserve2Submit() {
      this.$refs["reserveForm2"].validate((valid) => {
        if (valid) {

          let form = this.reserveForm2.data;
          axios({
            method: 'post',
            url: '/enrollservice/enrollstu/reserve',
            data: (form)
          }).then(res => {
            //验证是否预约成功
            if (res.data.success) {
              this.$message({
                type: "success",
                message: "预约成功啦，请等待短信通知"
              })
              this.active = 2
              this.interviewResult2 = '正在进行'
            } else {
              this.$message({
                type: "error",
                message: res.data.data['items']
              })
            }
          }).catch(() => {
            this.$message({
              type: "error",
              message: '请求出错,请尝试刷新本页面'
            })
          })


        }
      })
    },
    //预约一面 初始化加载面试时间
    reserve1Init() {
      this.active = 1;
      this.reserveForm1.data.name = this.$store.state.name
      this.reserveForm1.data.stuId = this.$store.state.stuId
      axios({
        method: 'get',
        url: '/enrollservice/enrollstu/reserve/1',
      }).then(res => {
        if (res.data.code === 20000) {
          this.reserveForm1.option = res.data.data.items
        } else {
          this.$message({
            type: "error",
            message: '一面预约未开始或未成功加载一面场次，请稍后再试'
          })
        }
      }).catch(() => {
        this.$message({
          type: "error",
          message: '获取预约时间信息失败，请稍后再试'
        })
      })
    },
    //预约二面 初始化加载面试时间
    reserve2Init() {
      this.active = 2;
      this.reserveForm2.data.name = this.$store.state.name
      this.reserveForm2.data.stuId = this.$store.state.stuId
      axios({
        method: 'get',
        url: '/enrollservice/enrollstu/reserve/2',
      }).then(res => {
        if (res.data.code === 20000) {
          this.reserveForm2.option = res.data.data.items
        } else {
          this.$message({
            type: "error",
            message: '二面预约未开始或未成功加载二面场次，请稍后再试'
          })
        }
      }).catch(() => {
        this.$message({
          type: "error",
          message: '获取预约时间信息失败，请稍后再试'
        })
      })
    },
    //一面中
    loading1Init(userInfo){
      this.active = 1
      this.interviewResult1 = userInfo.items['interviewList']['一面']
    },
    //二面中
    loading2Init(userInfo){
      this.active = 2
      this.interviewResult2 = userInfo.items['interviewList']['二面']
    },
  }
}
</script>

<style>
.userInfoDialogClass{
  opacity: 0.9;
}
</style>
<style scoped>

.box-card{
  position: relative;
  background: rgba(255,255,255,0.618);
  padding-bottom: 50px;
  margin: 10% auto;
  max-width: 800px;
  min-width: 300px;
}

.schedule_steps{
  width: 100%;
  height: auto;
}

.el-form-item{
  margin-top: 40px;
}

.register-submit{
  width: 100%;
  margin-top: 20px;
  margin-bottom: 40px;
}

.schedule_body{
  min-height: 300px;
}

.direction-select{
  width: 100%;
}
.schedule{
  padding: 3%;
}

</style>