// import React, { Component } from "react";

// export default class home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       boards: [
//         { boardId: 1, boardName: "TrelloBoard" },
//         { boardId: 2, boardName: "Password" },
//       ],
//     };
//   }
//   componentDidMount() {
//     let item = localStorage.getItem("state");
//     // item.map((board) => {
//     //   console.log(board);
//     // });
//   }

//   handleNavigate = (id) => {
//     this.props.history.push(`board/${id}`);
//   };

//   render() {
//     return (
//       <div style={{ padding: "2rem" }}>
//         <h1 style={{ color: "#eee" }}>Welcome to Kubric Trello!</h1>
//         <h4 style={{ color: "#eee" }}>These are your boards</h4>
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             width: "50%",
//             justifyContent: "center",
//             alignItems: "center",
//             textAlign: "center",
//           }}
//         >
//           {this.state.boards.map((board, index) => (
//             <div
//               style={{ backgroundColor: "#094c72", padding: "2rem 1rem" }}
//               key={index}
//             >
//               <div
//                 style={{
//                   borderRadius: "3px",
//                   backgroundColor: "white",
//                   padding: "1rem",
//                   margin: "0.3rem",
//                   cursor: "pointer",
//                 }}
//               >
//                 <div onClick={() => this.handleNavigate(board.boardId)}>
//                   {board.boardName}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }
