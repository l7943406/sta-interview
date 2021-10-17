<template>
  <div class="login">
    <el-row class="login_row" align="middle" type="flex">
      <el-col :xs="{span:0,offset:0}"
              :sm="{span:12,offset:1}"
              :md="{span:8,offset:1}"
              :lg="{span:8,offset:3}"
              :xl="{span:8,offset:5}">
        <div class="stu-info">
          <span style="font-size: 30px;">
            软件科技协会
          </span>
          <br>
          软件科技协会和ACM算法队是计算机学院于2010年设立的具有完善的教学体系和管理制度的大型实验室。

          协会目前开设“Java组”、“Web组”、“C++组”、“Golang组”等，历年来，有斩获微软、字节、阿里、腾讯、百度、快手等大厂offer的学长学姐，更有考入复旦大学、香港大学、南京大学、西安交通大学的前辈，大厂offer？名校上岸？不在话下！

          学校唯一的ACM算法集训队，周密的学习计划，科学的备赛环节，每周一次的训练赛，助你在比赛中大展身手。校赛，省赛，国赛乃至亚洲赛，铜奖，银奖，金奖拿到手软，综测，奖学金更是不在话下。软件科技协会和ACM算法队欢迎全校同学的到来，有关纳新问题请加入2021届纳新群聊：959989137。
        </div>
      </el-col>

      <el-col :xs="{span:20,offset:2}"
              :sm="{span:16,offset:0}"
              :md="{span:10,offset:4}"
              :lg="{span:10,offset:2}"
              :xl="{span:10,offset:0}">
        <el-card class="login-card" shadow="always">
          <el-form ref="loginForm"
                   label-position='right'
                   label-width="auto"

                   :model='loginForm.data'
                   :rules='loginForm.rule'>
            <div style="width:100%; text-align: center;font-weight: bold;font-size: 20px;">软件科技协会-面试报名</div>
            <el-form-item label="学号" prop="stuId">
              <el-input
                  placeholder="请输入学号"
                  prefix-icon="el-icon-postcard"
                  v-model="loginForm.data.stuId">
              </el-input>
            </el-form-item>

            <el-form-item label="姓名" prop="name">
              <el-input
                  placeholder="请输入姓名"
                  prefix-icon="el-icon-user-solid"
                  @keyup.enter.native='enter'
                  v-model="loginForm.data.name">
              </el-input>
            </el-form-item>

            <el-button type="primary" @click="enter" class="enter-button">我来啦</el-button>


          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>


</template>
<script>

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        data: {
          name: '',
          stuId: ''
        },
        rule: {
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
        }
      },
    }
  },
  methods: {
    enter() {
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          this.$store.commit("setName", this.loginForm.data.name);
          this.$store.commit("setStuId", this.loginForm.data.stuId);
          this.$router.push('/schedule')
        } else {
          this.$message.warning("请输入学号和姓名");
        }
      })
    }
  }
}
</script>

<style scoped>
.login-card {
  border-radius: 15px;
  max-width: 430px;
  min-width: 260px;
  background: rgba(255, 255, 255, 0.618);
  margin: 0 auto;
}

.el-form {
  width: 95%;
  margin: 10px auto;
}

.el-form-item {
  margin-top: 40px;
}

.enter-button:active {
  background-color: #efaa82;
}

.enter-button {
  border-color: transparent;
  width: 100%;
  margin-top: 20px;
  background-color: #EE9B86;
}

.stu-info {
  max-width: 490px;
  line-height: 30px;
  color: white;
}

.login_row {
  max-width: 2600px;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: -10%;
  bottom: 0;
}
</style>