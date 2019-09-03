<template>
    <section class="container">
      <div class="row no-gutters">
        <div class="col-md-4 col-sm-6">
          <div class="price-table">
            <div class="price-table-price">
              <div class="price-cricle-content">
                <span class="price-cricle-price">$99</span>
                <span class="price-person">/Person</span>
              </div>
            </div>
            <header class="price-title-basic">
              <h2 class="price-basic">BASIC</h2>
              <h3 class="price-plan">PRICE PLAN</h3>
            </header>
            <div class="price-list-content">
              <div class="priceTitle">
                <h5>Subtitle goes here</h5>
                <h6>subtitle second line goes here lorem ipsum *</h6>
              </div>
                <ul>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipisicing elit sed do</li>
                  <li>tempor incididunt ut</li>
                  <li>Labore et dolore magna</li>
                  <li>Enim ad minim veniam quis nostrud</li>
                </ul>
              <footer class="price-table-order">
                <div class="price-order">
                  <a href="#">ORDER</a>
                </div>
              </footer>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="price-table">
          <div class="price-table-price">
            <div class="price-cricle-content">
              <span class="price-cricle-price-advanced">$199</span>
              <span class="price-person">/Person</span>
            </div>
          </div>
          <div class="price-new">
            <img src="../assets/icon.png" alt="images display errors!!!">
            <!-- <span class="price-title-new">NEW</span> -->
          </div>
          <header class="price-title-advanced">
            <h2 class="price-basic">ADVANCED</h2>
            <h2 class="price-plan">PRICE PLAN</h2>
            <h6 class="price-plan-text">This is the very best price quantity advanced plan *</h6>
          </header>
          <div class="price-list-content">
            <div class="priceTitle">
              <h5>Subtitle goes here</h5>
              <h6>subtitle second line goes here lorem ipsum *</h6>
            </div>
              <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipisicing elit sed do</li>
                <li>tempor incididunt ut</li>
                <li>Labore et dolore magna</li>
                <li>Enim ad minim veniam quis nostrud</li>
              </ul>
            <div class="price-table-order">
              <div class="price-order">
                <a href="#">ORDER</a>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="price-table">
          <div class="price-table-price">
            <div class="price-cricle-content">
              <span class="price-cricle-price-life">$1999</span>
              <span class="price-person">/Person</span>
            </div>
          </div>
          <div class="price-title-life">
            <h2 class="price-basic">LIFE</h2>
            <h3 class="price-plan">TARIFF</h3>
          </div>
          <div class="price-list-content">
            <div class="priceTitle">
              <h5>Subtitle goes here</h5>
              <h6>subtitle second line goes here lorem ipsum *</h6>
            </div>
              <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipisicing elit sed do</li>
                <li>tempor incididunt ut</li>
                <li>Labore et dolore magna</li>
                <li>Enim ad minim veniam quis nostrud</li>
              </ul>
            <div class="price-table-order">
              <div class="price-order">
                <a>ORDER</a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
</template>
<style lang="scss" scoped>

  @import url('../../node_modules/normalize.css');

  *, *::before, *::after {
    box-sizing: border-box;
  }
  span {
    display: block;
  }
  h1,h2,h3,h4,h5,h6, ul {
    margin: 0;
    padding: 0;
  }
  h1, h2 {
    font-family: 'Montserrat', sans-serif;
  }
  $padding-left: 2.9rem;
  .container {
      max-width: 1170px;
      margin-top: 10%;
      box-sizing: border-box;
      font-family: 'Source Sans Pro', sans-serif;
    .price-table {
      position: relative;
      padding: 0;
      border: 1px solid #dfe5e8;
      .price-table-price {
        position: absolute;
        // left: 25%;
        transform: translate(35%, -50%);
        width: 7.5rem;
        height: 7.5rem;
        background-color: #393d50;
        border: 1px solid #393d50;
        border-radius: 50%;
        .price-cricle-content {
          position: absolute;
          top:50%;
          left:50%;
          transform: translate(-50%, -50%);
          text-align: center;
          .price-cricle-price {
            color: #0ec7e1;
          }
          .price-person {
            color: #99a9b5;
          }
          .price-cricle-price-advanced {
            color: #1c94ca;
          }
          .price-cricle-price-life {
            color: #7264bd;
          }
        }
      }
      .price-new::after {
        content: 'NEW';
        display: block;
        position: absolute;
        top:10%;
        transform: translate(80%, 80%);
        font-size: 0.75rem;
        color: #ffffff;
      }
      .price-new {
        width: 66px;
        height: 66px;
        position: absolute;
        transform: translate(220%, -50%);
      }
      .price-title-basic {
        font-size: 2.25rem;
        padding: 9rem 0 2rem $padding-left;
        color: #ffffff;
        background-color: #00bcd4;
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
        padding: 6.5rem 0 2.1rem $padding-left;
        background-color: #1c94ca;
        .price-plan-text {
          padding-top: 1rem;
          font-size: 0.875rem;
          font-family: 'Source Sans Pro', sans-serif;
        }
      }
      .price-title-life {
        @extend .price-title-basic;
        background-color: #7264bd;
      }
      .price-list-content {
        color: #7b8a94;
        background-color: #ffffff;
        .priceTitle {
          h5 {
            padding: 1.8rem 0 0 $padding-left;
            font-size: 1.5rem;
            font-weight: 300;
          }
          h6 {
            padding: 0.625rem 0 1.75rem $padding-left;
            font-size: 0.875rem;
          }
        }
          ul {
            list-style: none;
          }
          li {
            position: relative;
            padding-left: 4.2rem;
            line-height: 50px;
          }
          li:nth-child(odd) {
            background: #f4f6f7;
          }
          li:before {
            content: "\2611";
            position: absolute;
            left: 2.9rem;
          }
        .price-table-order {
            padding: 3.125rem 0 3.125rem $padding-left;
          .price-order:hover {
            background: #2c2e3d;
            border: 1px solid #b6c6c9;
            box-shadow: 10px 10px 5px grey;
            letter-spacing: 3px;
          }
          .price-order {
            padding-top: 12px;
            height: 3.125rem;
            width: 9.375rem;
            background-color: #b6c6c9;
            border: 1px solid #b6c6c9;
            border-radius: 1.5625rem;
            font-family: 'Montserrat', sans-serif;
            font-weight: bold;
            text-align: center;
            a {
              color: #ffffff;
              text-decoration: none;
            }
          }
        }
      }
    }
    .price-table::after {
      content: '';
      clear: both;
      display: table;
      margin-bottom: 30px;
    }
    .price-table:hover {
      box-shadow: 0 0 15px rgba(0,0,0,0.2) inset, 0 0 15px rgba(0,0,0,0.2);
      border-radius: 15px;
    }
  }
</style>
