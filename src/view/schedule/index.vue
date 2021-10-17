<template>
  <div class="schedule">
    <el-row class="schedule_row">
      <el-col :xs="{span:23,offset:0}"
              :sm="{span:20,offset:2}"
              :md="{span:16,offset:4}"
              :lg="{span:12,offset:6}"
              :xl="{span:8,offset:8}">
        <el-card class="box-card">
          <div slot="header" class="box-card-header">
            <div class="schedule_steps">
              <el-steps  :active="active" finish-status="success">
                <el-step title="报名"></el-step>
                <el-step title="一面"></el-step>
                <el-step title="二面"></el-step>
                <el-step title="结果" :status="interviewResult"></el-step>
              </el-steps>
            </div>
          </div>

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

                    <el-form-item label="方向" prop="choose">
                      <el-select v-model="registerForm.data.choose" class="choose-select">
                        <el-option value="STU" label="软件科技协会"></el-option>
                        <el-option value="ACM" label="ACM算法队"></el-option>
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
                    <el-form-item label="班级" prop="clazz">
                      <el-input v-model="registerForm.data.clazz" placeholder="请输入班级">

                      </el-input>
                    </el-form-item>


                    <el-form-item label="电话" prop="phone">
                      <el-input v-model="registerForm.data.phone" placeholder="请输入电话号码">

                      </el-input>
                    </el-form-item>

                    <el-button class="register-submit"
                               type="primary"
                               @click="registerSubmit()">
                      报名
                    </el-button>
                  </el-form>
              </div>

              <!-- 一面预约 -->
              <div v-if="active === 1">
                  <el-form ref='registerForm'
                           :model='registerForm.data'
                           :rules='registerForm.rule'
                           label-position='right'
                           label-width="auto">
                    <el-form-item label="学号" prop="stuId">
                      <el-input v-model="registerForm.data.stuId" placeholder="请输入学号">

                      </el-input>
                    </el-form-item>
                    <el-form-item label="姓名" prop="name">
                      <el-input v-model="registerForm.data.name" placeholder="请输入真实姓名">

                      </el-input>
                    </el-form-item>
                    <el-form-item label="班级" prop="clazz">
                      <el-input v-model="registerForm.data.clazz" placeholder="请输入班级">

                      </el-input>
                    </el-form-item>
                    <el-form-item label="电话" prop="phone">
                      <el-input v-model="registerForm.data.phone" placeholder="请输入电话号码">

                      </el-input>
                    </el-form-item>

                    <el-button class="register-submit"
                               type="primary"
                               @click="registerSubmit()">
                      报名
                    </el-button>
                  </el-form>
              </div>


              <!-- 二面预约 -->
              <div v-if="active === 2">
                <el-form ref='registerForm'
                         :model='registerForm.data'
                         :rules='registerForm.rule'
                         label-position='right'
                         label-width="auto">
                  <el-form-item label="学号" prop="stuId">
                    <el-input v-model="registerForm.data.stuId" placeholder="请输入学号">

                    </el-input>
                  </el-form-item>
                  <el-form-item label="姓名" prop="name">
                    <el-input v-model="registerForm.data.name" placeholder="请输入真实姓名">

                    </el-input>
                  </el-form-item>
                  <el-form-item label="班级" prop="clazz">
                    <el-input v-model="registerForm.data.clazz" placeholder="请输入班级">

                    </el-input>
                  </el-form-item>
                  <el-form-item label="电话" prop="phone">
                    <el-input v-model="registerForm.data.phone" placeholder="请输入电话号码">

                    </el-input>
                  </el-form-item>

                  <el-button class="register-submit"
                             type="primary"
                             @click="registerSubmit()">
                    报名
                  </el-button>
                </el-form>
              </div>

              <!-- 面试结果显示 -->
              <div v-if="active === 3">
                <el-form ref='registerForm'
                         :model='registerForm.data'
                         :rules='registerForm.rule'
                         label-position='right'
                         label-width="auto">
                  <el-form-item label="学号" prop="stuId">
                    <el-input v-model="registerForm.data.stuId" placeholder="请输入学号">

                    </el-input>
                  </el-form-item>
                  <el-form-item label="姓名" prop="name">
                    <el-input v-model="registerForm.data.name" placeholder="请输入真实姓名">

                    </el-input>
                  </el-form-item>
                  <el-form-item label="班级" prop="clazz">
                    <el-input v-model="registerForm.data.clazz" placeholder="请输入班级">

                    </el-input>
                  </el-form-item>
                  <el-form-item label="电话" prop="phone">
                    <el-input v-model="registerForm.data.phone" placeholder="请输入电话号码">

                    </el-input>
                  </el-form-item>

                  <el-button class="register-submit"
                             type="primary"
                             @click="registerSubmit()">
                    报名
                  </el-button>
                </el-form>
              </div>

            </div>
          </el-col>

        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: 'Schedule',
  data() {
    return {
      active: 0,
      interviewResult:'',
      registerForm: {
        data: {
          choose: '',
          stuId: '',
          name: '',
          clazz: '',
          phone: ''
        },
        rule: {
          choose: [
            {required: true, message: '请选择方向', trigger: 'blur'},
          ],
          stuId: [
            {required: true, message: '请输入学号', trigger: 'blur'},
            {pattern: '^([0-9]{8})([0-9]{2})?$', message: '学号为8位/10位数字', trigger: 'blur'}
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
          clazz: [
            {required: true, message: '请输入班级', trigger: 'blur'},
            {min: 2, max: 32, message: '班级2-32位,请输入正确的班级信息', trigger: 'blur'}
          ],
          phone: [
            {required: true, message: '请输入电话号码', trigger: 'blur'},
            {pattern: "^1(3[0-9]|5[0-3,5-9]|7[1-3,5-8]|8[0-9])\\d{8}$", message: '请输入正确的电话号码!', trigger: 'blur'}
          ],
        }
      },
      reserveForm: {

      }
    }
  },
  mounted() {
    this.registerForm.data.stuId = this.$store.state.stuId
    this.registerForm.data.name = this.$store.state.name

    if(this.registerForm.data.stuId === '' || this.registerForm.data.name === ''){
      this.$router.push('/login')
    }

    let userInfo = this.getUserInfo(this.registerForm.data.name, this.registerForm.data.stuId);
    console.log(userInfo)

    // axios({
    //   method: '',
    //   url: '',
    //   data: ''
    // }).then(res => {
    //   //todo 从store获取用户信息,获取不到就退回login
    //   console.log(res)
    //   this.active = 1
    // }).catch(err => {
    //   //todo 出err给用户提示
    //   console.log(err)
    // })
  }, methods: {
    async getUserInfo(name, stuId) {
      await axios({
        method: 'post',
        url: '/enrollservice/enrollstu/findStudent',
        data: {
          name,
          stuId
        }
      }).then(res => {
        return res
      })
    },
    registerSubmit() {
      this.$refs["registerForm"].validate((valid) => {
        if (valid) {
          this.$confirm('确认提交?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            let form = this.registerForm.data;

            axios({
              method: '',
              url: '',
              data: (form)
            }).then(res => {
              //todo 验证是否报名成功 成功跳转下一项 失败弹提示
              console.log(res)
              this.$message({
                type: "success",
                message: "报名成功啦!!!"
              })
              this.active = 1
            }).catch(err => {
              //todo 出err给用户提示
              console.log(err)
            })

          })
        }
      })
    }
  }
}
</script>
<style scoped>

.box-card{
  background: rgba(255,255,255,0.618);
  margin-top: 10%;
  margin-bottom: 10%;
  margin-left: 2%;
  max-width: 1200px;
  height: auto;
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
  min-height: 400px;
}

.choose-select{
  width: 100%;
}
</style>