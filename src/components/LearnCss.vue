<template>
    <section class="container">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:200,400,700|Source+Sans+Pro:300,400&display=swap" rel="stylesheet">
      <div class="col-md-4 col-sm-6 pricingTable">
        <div class="pricingTable-header">
          <div class="pricingCricle-content">
            <p class="pricingCricle-price">$99</p>
            <p class="pricing-person">/Person</p>
          </div>
        </div>
        <div class="pricing-title-basic">
          <h2 class="pricing-basic">BASIC</h2>
          <h3 class="pricing-plan">PRICE PLAN</h3>
        </div>
        <div class="pricing-list-group">
          <div class="pricingTitle">
            <h5>Subtitle goes here</h5>
            <h6>subtitle second line goes here lorem ipsum *</h6>
          </div>
          <div class="pricing-list-item">
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
          <div class="pricingTable-order">
            <div class="pricing-order">
              <span><a href="#">ORDER</a></span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6 pricingTable">
        <div class="pricingTable-header">
          <div class="pricingCricle-content">
            <p class="pricingCricle-price-advanced">$199</p>
            <p class="pricing-person">/Person</p>
          </div>
        </div>
        <div class="pricing-new">
          <img src="../assets/icon.png">
          <!-- <span class="pricing-title-new">NEW</span> -->
        </div>
        <div class="pricing-title-advanced">
          <h2 class="pricing-basic">ADVANCED</h2>
          <h2 class="pricing-plan">PRICE PLAN</h2>
          <h6 class="pricing-plan-text">This is the very best pricing quantity advanced plan *</h6>
        </div>
        <div class="pricing-list-group">
          <div class="pricingTitle">
            <h5>Subtitle goes here</h5>
            <h6>subtitle second line goes here lorem ipsum *</h6>
          </div>
          <div class="pricing-list-item">
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
          <div class="pricingTable-order">
            <div class="pricing-order">
              <span><a href="#">ORDER</a></span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6 pricingTable">
        <div class="pricingTable-header">
          <div class="pricingCricle-content">
            <p class="pricingCricle-price-life">$1999</p>
            <p class="pricing-person">/Person</p>
          </div>
        </div>
        <div class="pricing-title-life">
          <h2 class="pricing-basic">LIFE</h2>
          <h3 class="pricing-plan">TARIFF</h3>
        </div>
        <div class="pricing-list-group">
          <div class="pricingTitle">
            <h5>Subtitle goes here</h5>
            <h6>subtitle second line goes here lorem ipsum *</h6>
          </div>
          <div class="pricing-list-item">
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
          <div class="pricingTable-order">
            <div class="pricing-order">
              <span><a href="https://www.w3schools.com/cssref/default.asp">ORDER</a></span>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
<style lang="scss">
    .container {
      max-width: 1170px;
      height: auto;
      margin: auto;
      margin-top: 10%;
      display: flex;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
      box-sizing: border-box;
    .pricingTable::after {
      content: '';
      clear: both;
      display: table;
    }
    .pricingTable:hover {
      box-shadow: 0 0 15px rgba(0,0,0,0.2) inset, 0 0 15px rgba(0,0,0,0.2);
      border-radius: 15px;
    }
    .pricingTable {
      border: 1px solid #dfe5e8;
      padding: 0;
      
      .pricingTable-header {
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
        .pricingCricle-content {
          .pricingCricle-price {
            color: #0ec7e1;
            margin: 0;
          }
          .pricing-person {
            color: #99a9b5;
            margin: 0;
            font-family: 'Source Sans Pro', sans-serif;
          }
          .pricingCricle-price-advanced {
            color: #1c94ca;
            margin: 0;
          }
          .pricingCricle-price-life {
            color: #7264bd;
            margin: 0;
          }
        }
      }
      .pricing-new::after {
        content: 'NEW';
        color: #ffffff;
        font-size: 0.75rem;
        display: block;
        margin-top:-2.8125rem;
        margin-left: 0.125rem;
        text-align: center;
      }
      .pricing-new {
        width: 66px;
        height: 66px;
        top: -2.0625rem;
        position: absolute;
        left: 9.1875rem;
        text-align: center;
      }
      .pricing-title-basic {
        font-size: 2.25rem;
        background-color: #00bcd4;
        color: #ffffff;
        height: 17rem;
        padding: 9rem 0 0  2.9rem;
        font-family: 'Montserrat', sans-serif;
        .pricing-basic {
          margin: 0;
          padding: 0;
          font-weight: bold;
        }
        .pricing-plan {
          margin: 0;
          padding-top: 1.3rem;
          font-weight: 200;
        }
      }
      .pricing-title-advanced {
        @extend .pricing-title-basic;
        padding: 6.5rem 0 0 2.9rem;
        background-color: #1c94ca;
        .pricing-plan-text {
          font-size: 0.875rem;
          font-family: 'Source Sans Pro', sans-serif;
          padding-top: 1rem;
        }
      }
      .pricing-title-life {
        @extend .pricing-title-basic;
        background-color: #7264bd;
      }
      .pricing-list-group {
        background-color: #ffffff;
        color: #7b8a94;
        font-family: 'Source Sans Pro', sans-serif;
        .pricingTitle {
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
        .pricing-list-item {
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
        .pricingTable-order {
          height: 9.0625rem;
            display: flex;
            align-items: center;
            padding-left: 2.9rem;
          .pricing-order:hover {
            border: 1px solid #b6c6c9;
            box-shadow: 10px 10px 5px grey;
            background: #2c2e3d;
            letter-spacing: 3px;
          }
          .pricing-order {
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
              text-decoration: none;
            }
          }
        }
      }
    }
  }
</style>
