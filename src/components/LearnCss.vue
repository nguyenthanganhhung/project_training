<template>
    <div class="row">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:200,400,700|Source+Sans+Pro:300,400&display=swap" rel="stylesheet">
      <div class="col-md-4 price-table">
        <div class="price-table-box">
          <div class="price-cricle-price">
            <p class="price-table-price">$99</p>
            <p class="price-person">/Person</p>
          </div>
        </div>
        <div class="price-title-basic">
          <h2 class="price-basic">BASIC</h2>
          <h3 class="price-plan">PRICE PLAN</h3>
        </div>
        <div class="price-list-group">
          <div class="price-header">
            <h5>Subtitle goes here</h5>
            <h6>subtitle second line goes here lorem ipsum *</h6>
          </div>
          <div class="price-list-item">
            <ul class="list-group">
                <li>
                  <P>&#9745;
                    <span>ipsum dolor sit amet</span>
                  </P>
                </li>
                <li>
                  <p>&#x2611;
                    <span>Consectetur adipisicing elit sed do</span>
                    </p>
                </li>
                <li>
                  <p>&#x2611;
                    <span>tempor incididunt ut</span>
                  </p>
                </li>
                <li>
                  <p>&#x2611;
                    <span>Labore et dolore magna</span>
                  </p>
                </li>
                <li>
                  <p>&#x2611;
                    <span>Enim ad minim veniam quis nostrud</span>
                  </p>
                </li>
              </ul>
          </div>
          <div class="price-box-order">
            <div class="price-order">
              <span><a href="#">ORDER</a></span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 price-table">
        <div class="price-table-box">
          <div class="price-cricle-price">
            <p class="price-table-price-advanced">$199</p>
            <p class="price-person">/Person</p>
          </div>
        </div>
        <div class="price-new">
          <img src="../assets/icon.png">
          <!-- <span class="price-title-new">NEW</span> -->
        </div>
        <div class="price-title-advanced">
          <h2 class="price-basic">ADVANCED</h2>
          <h2 class="price-plan">PRICE PLAN</h2>
          <h6 class="price-plan-text">This is the very best price/quantity advanced plan *</h6>
        </div>
        <div class="price-list-group">
          <div class="price-header">
            <h5>Subtitle goes here</h5>
            <h6>subtitle second line goes here lorem ipsum *</h6>
          </div>
          <div class="price-list-item">
            <ul class="list-group">
                <li>
                  <P>&#9745;
                    <span>ipsum dolor sit amet</span>
                  </P>
                </li>
                <li>
                  <p>&#x2611;
                    <span>Consectetur adipisicing elit sed do</span>
                    </p>
                </li>
                <li>
                  <p>&#x2611;
                    <span>tempor incididunt ut</span>
                  </p>
                </li>
                <li>
                  <p>&#x2611;
                    <span>Labore et dolore magna</span>
                  </p>
                </li>
                <li>
                  <p>&#x2611;
                    <span>Enim ad minim veniam quis nostrud</span>
                  </p>
                </li>
              </ul>
          </div>
          <div class="price-box-order">
            <div class="price-order-center">
              <span><a href="#">ORDER</a></span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 price-table">
        <div class="price-table-box">
          <div class="price-cricle-price">
            <p class="price-table-price-life">$1999</p>
            <p class="price-person">/Person</p>
          </div>
        </div>
        <div class="price-title-life">
          <h2 class="price-basic">LIFE</h2>
          <h3 class="price-plan">TARIFF</h3>
        </div>
        <div class="price-list-group">
          <div class="price-header">
            <h5>Subtitle goes here</h5>
            <h6>subtitle second line goes here lorem ipsum *</h6>
          </div>
          <div class="price-list-item">
            <ul class="list-group">
                <li>
                  <P>&#9745;
                    <span>ipsum dolor sit amet</span>
                  </P>
                </li>
                <li>
                  <p>&#x2611;
                    <span>Consectetur adipisicing elit sed do</span>
                    </p>
                </li>
                <li>
                  <p>&#x2611;
                    <span>tempor incididunt ut</span>
                  </p>
                </li>
                <li>
                  <p>&#x2611;
                    <span>Labore et dolore magna</span>
                  </p>
                </li>
                <li>
                  <p>&#x2611;
                    <span>Enim ad minim veniam quis nostrud</span>
                  </p>
                </li>
              </ul>
          </div>
          <div class="price-box-order">
            <div class="price-order">
              <span><a href="#">ORDER</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<style lang="scss">
    .row {
      max-width: 1170px;
      height: auto;
      margin: auto;
      margin-top: 10%;
    .price-table::after {
      content: '';
      clear: both;
      display: table;
      padding-top:9rem;
      }
    .price-table:hover {
      box-shadow: 10px 10px 5px grey;
    }
    .price-table {
      border: 1px solid #dfe5e8;
      padding: 0;
      
      .price-table-box {
      width: 7.5rem;
      height: 7.5rem;
      border-radius: 50%;
      background-color: #393d50;
      position: absolute;
      margin-top: -3.75rem;
      margin-left: 2.75rem;
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: center;
        .price-cricle-price {
          .price-table-price {
            color: #0ec7e1;
            margin: 0;
          }
          .price-person {
            color: #99a9b5;
            margin: 0;
            font-family: 'Source Sans Pro', sans-serif;
          }
          .price-table-price-advanced {
            color: #1c94ca;
            margin: 0;
          }
          .price-table-price-life {
            color: #7264bd;
            margin: 0;
          }
        }
      }
      .price-new::after {
        content: 'NEW';
        color: #ffffff;
        font-size: 0.75rem;
        display: block;
        margin-top:-2.8125rem;
        margin-left: 0.125rem;
        text-align: center;
      }
      .price-new {
        width: 66px;
        height: 66px;
        margin-top: -2.0625rem;
        position: absolute;
        margin-left: 9.1875rem;
        text-align: center;
      }
      .price-title-basic {
        font-size: 2.25rem;
        background-color: #00bcd4;
        color: #ffffff;
        height: 17rem;
        padding: 9rem 0 0  2.9rem;
        font-family: 'Montserrat', sans-serif;
        .price-basic {
          margin: 0;
          padding: 0;
          font-weight: bold;
        }
        .price-plan {
          margin: 0;
          padding-top: 1.3rem;
          font-weight: 200;
        }
      }
      .price-title-advanced {
        @extend .price-title-basic;
        padding: 6.5rem 0 0 2.9rem;
        background-color: #1c94ca;
        .price-plan-text {
          font-size: 0.875rem;
          font-family: 'Montserrat', sans-serif;
          padding-top: 1rem;
        }
      }
      .price-title-life {
        @extend .price-title-basic;
        background-color: #7264bd;
      }
      .price-list-group {
        background-color: #ffffff;
        color: #7b8a94;
        font-family: 'Source Sans Pro', sans-serif;
        .price-header {
          height: 6.2rem;
          h5 {
            font-size: 1.5rem;
            padding: 1.8rem 0 0 2.9rem;
            margin: 0;
            font-weight: 300;
          }
          h6 {
            font-size: 0.875rem;
            margin: 0;
            padding: 0.625rem 0 1.75rem 2.9rem;
          }
        }
        .price-list-item {
          ul {
            list-style: none;
          }
          li:nth-child(odd) {
            background: #f4f6f7;
          }
          p {
            padding: 1rem 0 0 2.9rem;
            span {
              padding-left: 0.3125rem;
            }
          }
        }
        .price-box-order {
          height: 9.0625rem;
            display: flex;
            padding-left: 2.9rem;
            align-items: center;
          .price-order:hover {
            border: 1px solid #b6c6c9;
            box-shadow: 10px 10px 5px grey;
          }
          .price-order {
            height: 3.125rem;
            width: 9.375rem;
            background-color: #b6c6c9;
            border: 1px solid #b6c6c9;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 1.5625rem;
            font-family: 'Montserrat', sans-serif;
            font-weight: bold;
            a {
              color: #ffffff;
            }
          }
          .price-order-center{
            @extend .price-order;
            background: #2c2e3d;
          }
        }
      }
    }
  }
</style>
