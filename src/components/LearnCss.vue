<template>
  <div class="row">
    <div id="container1">
      <div id="circle1">
        <p id="circle-content1">$99</p>
        <p id="circle-content2">/person</p>
      </div>
      <div id="container1-content">
        <div id="id1">
          <p id="h1">
            BASIC
          </p>
          <p id="h2">PRICE PLAN</p>
        </div>
        <div id="id2">
          <div id="content1">
            <p>Subtitle goes here</p>
            <span>subtitle second line goes here lorem ipsum *</span>
          </div>
          <div id="content2">
            <ul class="list-group">
              <li class="list-group-item list-group-item-secondary">
                <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something">
                <label>Lorem ipsum dolor sit amet</label>
              </li>
              <li class="list-group-item list-group-item-light">
                <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something">
                <label>Consectetur adipisicing elit sed do</label>
              </li>
              <li class="list-group-item list-group-item-secondary">
                <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something">
                <label>Eiusmod tempor incididunt ut</label>
              </li>
              <li class="list-group-item list-group-item-light">
                <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something">
                <label>Labore et dolore magna</label>
              </li>
              <li class="list-group-item list-group-item-secondary">
                <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something">
                <label>Enim ad minim veniam quis nostrud</label>
              </li>
            </ul>
          </div>
          <div id="content3">
            <p><a href="#">ORDER</a></p>
          </div>
        </div>
      </div>
    </div>
    <div id="container2">
        <div id="circle2">
          <p id="circle-content1">$199</p>
          <p id="circle-content2">/person</p>
        </div>
        <div id="circle2-box">
          <img src="../assets/icon.png">
          <p id="circle2-box-font">New</p>
        </div>
        <div id="container2-content">
          <div id="id1">
            <p id="h1">
              ADVANCED
            </p>
            <p id="h2">PRICE PLAN</p>
            <p id="h3">This is the very best price/quantity advanced plan *</p>
          </div>
          <div id="id2">
            <div id="content1">
              <p>Subtitle goes here</p>
              <span>subtitle second line goes here lorem ipsum *</span>
            </div>
            <div id="content2">
              <ul class="list-group">
                <li class="list-group-item list-group-item-secondary">
                  <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something">
                  <label>Lorem ipsum dolor sit amet</label>
                </li>
                <li class="list-group-item list-group-item-light">
                  <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something">
                  <label>Consectetur adipisicing elit sed do</label>
                </li>
                <li class="list-group-item list-group-item-secondary">
                  <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something">
                  <label>Eiusmod tempor incididunt ut</label>
                </li>
                <li class="list-group-item list-group-item-light">
                  <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something">
                  <label>Labore et dolore magna</label>
                </li>
                <li class="list-group-item list-group-item-secondary">
                  <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something">
                  <label>Enim ad minim veniam quis nostrud</label>
                </li>
              </ul>
            </div>
            <div id="content3">
              <p><a href="#">ORDER</a></p>
            </div>
          </div>
        </div>
    </div>
    <div id="container3">
        <div id="circle3">
          <p id="circle-content1">$1999</p>
          <p id="circle-content2">/person</p>
        </div>
        <div id="container3-content">
          <div id="id1">
            <p id="h1">
              LIFE
            </p>
            <p id="h2">TARIFF</p>
          </div>
          <div id="id2">
            <div id="content1">
              <p>Subtitle goes here</p>
              <span>subtitle second line goes here lorem ipsum *</span>
            </div>
            <div id="content2">
              <ul class="list-group">
                <li class="list-group-item list-group-item-secondary">
                  <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something">
                  <label>Lorem ipsum dolor sit amet</label>
                </li>
                <li class="list-group-item list-group-item-light">
                  <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something">
                  <label>Consectetur adipisicing elit sed do</label>
                </li>
                <li class="list-group-item list-group-item-secondary">
                  <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something">
                  <label>Eiusmod tempor incididunt ut</label>
                </li>
                <li class="list-group-item list-group-item-light">
                  <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something">
                  <label>Labore et dolore magna</label>
                </li>
                <li class="list-group-item list-group-item-secondary">
                  <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something">
                  <label>Enim ad minim veniam quis nostrud</label>
                </li>
              </ul>
            </div>
            <div id="content3">
              <p><a href="#">ORDER</a></p>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .row {
    padding: 100px 0px 300px 20%;
  }
  //attribute global
  #content-header {
    height: 272px;
    #h1 {
      margin-left: 49px;
      padding-top: 148px;
      font-size: 26px;
      clear: both;
      color: #ffffff;
      font-weight: bold;
      font-family:Arial, Helvetica, sans-serif
    }
    #h2 {
      margin-left: 49px;
      margin-top: -10px;
      font-size: 27px;
      color: #ffffff;
      font-family:Arial, Helvetica, sans-serif
      }
  }
  #circle {
    width: 120px;
    height: 120px;
    background: #393d50;
    border: 1px solid #393d50;
    border-radius: 60px;
    position: absolute;
    margin-left: 43px;
    margin-top: -60px;
  }
  #circle-content {
    color: #99a9b5;
    margin-left: 35px;
    margin-top: 10px;
    font-size: 15px;
  }
  #content-box2 {
    input {
      margin-left: 27px;
    }
    label {
      margin-left: 55px;
      color: #5f727f;
    }
  }
  #content-box3 {
    width: 150px;
    height: 50px;
    background: #b6c6c9;
    border: 2px solid #b6c6c9;
    border-radius: 25px;
    margin: 48px 190px 48px 50px;
    p {
      margin: 13px 50px;
      font-weight: bold;
      font-size: 14px;
      a {
        color: #ffffff;
      }
    }
  }
  #content-box1 {
    height: 99px;
    p {
      font-size: 20px;
      margin-left: 45px;
      padding-top: 27px;
      color: #7b8a94;
      margin-bottom: -5px;
    }
    span {
      font-size: 9px;
      color: #99a9b5;
      margin-left: 46px;
    }
  }
  //the end attribute global
  #container1 {
    width: 390px;
    #container1-content {
      #id1 {
        @extend #content-header;
        background-color: #00bcd4;
      }
      #id2 {
        background-color: #ffffff;
        border: 1px solid #dfe5e8;
        height: 528px;
        #content1 {
          @extend #content-box1;
        }
        #content2 {
          @extend #content-box2
        }
        #content3 {
          @extend #content-box3
        }
      }
    }
    #circle1 {
      @extend #circle;
      #circle-content1 {
        font-size: 26px;
        color: #00bcd4;
        margin-top: 27px;
        margin-left: 35px;
        height: 26px;
        width: 50px;
      }
      #circle-content2 {
        @extend #circle-content
      }
    }
  }
  #container2 {
    width: 390px;
    #container2-content {
      #id1 {
        @extend #content-header;
        background-color: #1c94ca;
        #h3 {
          color: #ffffff;
          font-size: 10px;
          font-family:Arial, Helvetica, sans-serif;
          margin-left: 49px;
        }
      }
      #id2 {
        height: 528px;
        background-color: #ffffff;
        border-bottom: 1px solid #dfe5e8;
        #content1 {
          @extend #content-box1;
        }
        #content2 {
          @extend #content-box2
        }
        #content3 {
          @extend #content-box3;
          background: #2c2e3d;
          border: 2px solid #2c2e3d;
        }
      }
    }
    #circle2 {
      @extend #circle;
      #circle-content1 {
        font-size: 26px;
        color: #1b9dd9;
        margin-top: 27px;
        margin-left: 32px;
        height: 26px;
        width: 50px;
      }
      #circle-content2 {
        @extend #circle-content
      }
    }
    #circle2-box {
      position: absolute;
      margin-top: -34px;
      margin-left: 148px;
      #circle2-box-font {
        font-size: 10px;
        color:#ffffff;
        margin-top: -43px;
        padding-left: 23px;

      }
    }
  }
  #container3 {
    width: 390px;
    #container3-content {
      #id1 {
        background-color: #7264bd;
        @extend #content-header
      }
      #id2 {
        height: 528px;
        background-color: #ffffff;
        border: 1px solid #dfe5e8;
        #content1 {
          @extend #content-box1
        }
        #content2 {
          @extend #content-box2
        }
        #content3 {
          @extend #content-box3
        }
      }
    }
    #circle3 {
      @extend #circle;
      #circle-content1 {
        font-size: 26px;
        color: #9482f6;
        margin-top: 27px;
        margin-left: 25px;
        height: 26px;
        width: 50px;
      }
      #circle-content2 {
        @extend #circle-content
      }
    }
  }
</style>
