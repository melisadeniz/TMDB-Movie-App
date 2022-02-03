import styled from "styled-components";

export const Opening = styled.div`

.loading {
  width: 300px;
  box-sizing: border-box;
  position: absolute;
  right: 0px;
  left: 0px;
  top: 30%;
  display: table;
  margin: 0 auto;
}

  img {
  width: 760px;
  height: 600px;
  right: 0px;
  left: 0px;
  display: table;
  margin: 0 auto;    
  border-top: 5px solid #ddd;
  border-bottom: 5px solid #ddd;
  padding: 50px 0px;
  }

.loading::before, .loading::after {
  content: '';
  width: 0%;
  position: absolute;
  z-index: 99999;
}
.loading::before {
  border-top: 5px solid #d93025;
  animation: left 8s linear infinite;
}
.loading::after {
  border-top: 5px solid #616161;
  transform: translate(0px, 183px);
  right: 0;
  animation: right 8s linear infinite;
}

/* Standard Syntax */
@keyframes left {
  0% { width: 0%; }
  50% { width: 100%; }
}
/* For Safari Versions */
@-webkit-keyframes left {
0% { width: 0%; }
  50% { width: 100%; }
}

/* Standard Syntax */
@keyframes right {
  0% { width: 0%; }
  50% { width: 100%; }
}
/* For Safari Versions */
@-webkit-keyframes right {
  0% { width: 0%; }
  50% { width: 100%; }
}
`