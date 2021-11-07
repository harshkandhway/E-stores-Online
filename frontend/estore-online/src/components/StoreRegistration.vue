<template>
  <div>
    <div class="form-design">
      <div class="form-container">
        <div class="store-name">E-Stores Online</div>
        <div class="form-heading">Register Store</div>
        <form @submit.prevent="createStore()">
          <div>
            <form>
              <div class="name-category">
                <div style="margin-right:10px">
                  <label for="fname">Name</label>
                  <input type="text" id="fname" placeholder="Store Name" class="input-style" v-model="storeDetail.name"/>
                </div>
                <div>
                  <label for="text">Category</label>
                  <input type="text" placeholder="Store Category" class="input-style" v-model="storeDetail.category"/>
                </div>
              </div>
            </form>
          </div>
          <div class="form-heading">Address</div>
          <div>
            <form>
              <div class="street-address">
                <div>
                  <label for="text">Street</label>
                  <textarea type="textarea" placeholder="Street" class="input-style" v-model="storeDetail.address"></textarea>
                </div>
              </div>
            </form>
          </div>

          <input type="submit" value="Submit" class="submit" />
        </form>
      </div>
      <div class="company-logo">
        <img
          src="https://hdn-1.fynd.com/company/884/applications/000000000000000000000001/application/pictures/free-logo/original/v6YLFKFeJ-Fynd.jpeg"
          style="width:200px; height:200px;"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {createStore} from '@/services/store.js'
import {showMe,modifyUser} from '@/services/user'
export default {
  name: "StoreRegistration",
  data() {
    return {
      storeDetail: {
          name:'',
          category:'',
          address:'',
          userId:'',
          storeEmail:''
      },
      user: {
        storeId: ""
    }
    }
  },
  methods:{
      createStore(){
        showMe().then(data=>{
          this.storeDetail.userId = data.user.userId
          this.storeDetail.storeEmail = data.user.email
          createStore(this.storeDetail).then(data=>{
            this.user.storeId = data.store._id
            modifyUser(this.storeDetail.userId,this.user).then(data=>console.log(data))
            this.storeDetail.name=''
            this.storeDetail.category=''
            this.storeDetail.address=''
            this.storeDetail.userId=''
            console.log(data)
          })
          console.log(data)
          })
          .catch(error=>error)
      }
  }
};
</script>

<style scoped>
.form-design {
  width: fit-content;
  border: 1px solid grey;
  height: auto;
  margin: 60px auto;
  display: flex;
}
.form-container {
  padding: 35px 25px;
  flex-basis: 75%;
}
.company-logo {
  margin: auto;
  flex-basis: 25%;
}
.name-category {
  display: flex;
  justify-content: space-between;
}
.store-name {
  color: #33343b;
  font-size: 25px;
  font-weight: 500;
  margin: 10px 0;
}
.form-heading {
  color: #33343b;
  font-size: 20px;
  font-weight: 500;
  margin: 12px 0;
}
.input-style {
  border: 1px solid #33343b;
  padding: 8px;
  border-radius: 3px;
  background-color: white;
  width: 100%;
  margin-bottom: 8px;
}
form label {
  font-size: 18px;
  margin: 8px 0;
}
.street-address {
  display: flex;
  flex-direction: column;
}
.city-state {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.submit {
  margin-top: 25px;
  width: 100%;
  background-color: goldenrod;
  font-size: 18px;
  padding: 8px;
  color: white;
  font-weight: 500;
}
@media screen and (max-width: 1200px) {
  .form-design {
    width: 60%;
  }
  .company-logo {
    display: none;
  }
  .form-container {
    justify-content: center;
    align-items: center;
    flex-basis: 90%;
    margin: 0 auto;
  }
}
@media screen and (max-width: 1000px) {
  .name-category {
    display: flex;
    flex-direction: column;
  }
  .city-state {
    display: flex;
    flex-direction: column;
  }
}
@media screen and (max-width: 500px) {
  .form-design {
    width: 90%;
  }
  .form-container {
    width: 100%;
  }
}
</style>