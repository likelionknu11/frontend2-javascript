import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div class="background">
        <header>
          <div class="inner">
            <img
              src="images/Yeongcheon/Yeongcheon2.jpg"
              alt="main_header_img"
            />
          </div>
        </header>
        <div class="main">
          <div class="inner">
            <div class="YeongcheonImgPart">
              <img
                src="../images/Yeongcheon/Yeongcheon3.jpg"
                alt="Yeongcheon_img01"
              />
              <img
                src="/images/Yeongcheon/Yeongcheon4.jpg"
                alt="Yeongcheon_img02"
              />
            </div>
            <div class="YeongcheonShortcut">
              <span class="YeonchoenSlogan">행복한 도시, 푸른 영천</span>
              <br />
              <button class="YeonchoenPageBtn">
                <a href="https://www.yc.go.kr/">영천시 바로가기</a>
              </button>
            </div>
            <div class="YeongcheonImgPart">
              <img
                src="./images/Yeongcheon/Yeongcheon5.JPG"
                alt="Yeongcheon_img03"
              />
              <img
                src="./images/Yeongcheon/Yeongcheon12.jpg"
                alt="Yeongcheon_img04"
              />
            </div>
          </div>
        </div>{" "}
        {/* 체험 미리보기 이미지 */}
        <div class="Yeongcheon_ins">
          <div class="inner">
            <div class="pglist">
              <div class="button-container">
                <img
                  src="./images/pin.png"
                  class="button button1"
                  onclick="showDetails('Button 1')"
                  alt="button"
                ></img>
                <img
                  src="./images/pin.png"
                  class="button button2"
                  onclick="showDetails('Button 2')"
                  alt="button"
                ></img>
                <img
                  src="./images/pin.png"
                  class="button button3"
                  onclick="showDetails('Button 3')"
                  alt="button"
                ></img>
                <img
                  src="./images/pin.png"
                  class="button button4"
                  onclick="showDetails('Button 4')"
                  alt="button"
                ></img>
                <img
                  src="./images/pin.png"
                  class="button button5"
                  onclick="showDetails('Button 5')"
                  alt="button"
                ></img>
                <img
                  src="./images/pin.png"
                  class="button button6"
                  onclick="showDetails('Button 6')"
                  alt="button"
                ></img>
                <img
                  src="./images/pin.png"
                  class="button button7"
                  onclick="showDetails('Button 7')"
                  alt="button"
                ></img>
              </div>

              <div id="myModal" class="modal">
                <div class="modal-content">
                  <span class="close">&times;</span>
                  <p id="detailText">Some text in the Modal..</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div class="categories">
      <div class="inner">
        <ul>
          <a href="./programlist.html">
            <li>영천시 소개</li>
          </a>
          <a href="">
            <li>프로그램 소개</li>
          </a>
          <a href="./index2.html">
            <li>체험 예약</li>
          </a>
          <a href="">
            <li>게시판</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div class="inner">
        <div class="ft-logo">
          <a href="https://www.yc.go.kr/">
            <img src="./images/Yeongcheon_logo.png" alt="Yeongcheon_logo" />
          </a>
          <p class="copyright">ⓒ 2023 Team. All Rights Reserved.</p>
        </div>
        <div class="team-int">
          {/*제작 팀원 */}
          <div class="member">
            <p>원도연 dyw7179@gmail.com</p>
            <p>양은지 yeeeee0417@gmail.com</p>
            <p>김재연 getsoss@gmail.com</p>
            <p>이서현 uimi3606@gmail.com</p>
          </div>
        </div>
        <div class="sns">
          {/*영천시 sns */}
          <a href="">
            <img src="" alt="" />
          </a>
          <a href="">
            <img src="" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default App;
