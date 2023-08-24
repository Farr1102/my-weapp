import { View, Button } from '@tarojs/components';
import CSSModule from './index.module.less'; // 导入自定义的样式文件
import { useEffect, useState } from 'react';
import { AtButton } from 'taro-ui'
import React from 'react'

type ICell = {
  row: any,
  col: any
}

const Game2048 = () => {
  //   // config = {
  //   //   navigationBarTitleText: '2048小游戏'
  //   // };
  const initBoard = Array(4).fill(0).map(() => Array(4).fill(0));
  const initScore = 0
  // const [board, setBoard] = useState(Array(4).fill(0).map(() => Array(4).fill(0)));// 初始化4x4的棋盘
  // const [score, setScore] = useState(0)

  //   useEffect(() => {
  //     addRandomNumber();
  //     addRandomNumber();
  //   }, [])

  //   // 添加一个随机数（2或4）到空白格子上
  //   const addRandomNumber = () => {
  //     const arr = board;
  //     const emptyCells: ICell[] = [];

  //     // 找出空白格子的坐标
  //     for (let i = 0; i < 4; i++) {
  //       for (let j = 0; j < 4; j++) {
  //         if (arr[i][j] === 0) {
  //           emptyCells.push({ row: i, col: j });
  //         }
  //       }
  //     }
  //     // 从空白格子中随机选取一个，并设置为2或4
  //     if (emptyCells.length > 0) {
  //       const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  //       const newValue = Math.random() < 0.9 ? 2 : 4;
  //       arr[randomCell.row][randomCell.col] = newValue;
  //     }
  //     setBoard(arr)
  //   };

  // 处理滑动事件
  // const handleSwipe = (direction) => {
  //   const newBoard = copyBoard(board);
  //   let newScore = score;
  //   // 根据滑动方向合并相同的数字
  //   switch (direction) {
  //     case 'left':
  //       for (let i = 0; i < 4; i++) {
  //         for (let j = 1; j < 4; j++) {
  //           if (newBoard[i][j] !== 0) {
  //             let k = j - 1;
  //             while (k >= 0 && newBoard[i][k] === 0) {
  //               k--;
  //             }
  //             if (k >= 0 && newBoard[i][k] === newBoard[i][j]) {
  //               newBoard[i][k] *= 2;
  //               newBoard[i][j] = 0;
  //             } else {
  //               newBoard[i][k + 1] = newBoard[i][j];
  //               if (k + 1 !== j) {
  //                 newBoard[i][j] = 0;
  //               }
  //             }
  //           }
  //         }
  //       }
  //       break;
  //     case 'right':
  //       // 实现向右滑动的逻辑
  //       for (let i = 0; i < 4; i++) {
  //         for (let j = 2; j >= 0; j--) {
  //           if (newBoard[i][j] !== 0) {
  //             let k = j + 1;
  //             while (k < 4 && newBoard[i][k] === 0) {
  //               k++;
  //             }
  //             if (k < 4 && newBoard[i][k] === newBoard[i][j]) {
  //               newBoard[i][k] *= 2;
  //               newBoard[i][j] = 0;
  //             } else {
  //               newBoard[i][k - 1] = newBoard[i][j];
  //               if (k - 1 !== j) {
  //                 newBoard[i][j] = 0;
  //               }
  //             }
  //           }
  //         }
  //       }
  //       break;
  //     case 'up':
  //       // 实现向上滑动的逻辑
  //       for (let i = 1; i < 4; i++) {
  //         for (let j = 0; j < 4; j++) {
  //           if (newBoard[i][j] !== 0) {
  //             let k = i - 1;
  //             while (k >= 0 && newBoard[k][j] === 0) {
  //               k--;
  //             }
  //             if (k >= 0 && newBoard[k][j] === newBoard[i][j]) {
  //               newBoard[k][j] *= 2;
  //               newBoard[i][j] = 0;
  //             } else {
  //               newBoard[k + 1][j] = newBoard[i][j];
  //               if (k + 1 !== i) {
  //                 newBoard[i][j] = 0;
  //               }
  //             }
  //             newScore += newBoard[k][j];
  //           }
  //         }
  //       }
  //       break;
  //     case 'down':
  //       // 实现向下滑动的逻辑
  //       for (let i = 2; i >= 0; i--) {
  //         for (let j = 0; j < 4; j++) {
  //           if (newBoard[i][j] !== 0) {
  //             let k = i + 1;
  //             while (k < 4 && newBoard[k][j] === 0) {
  //               k++;
  //             }
  //             if (k < 4 && newBoard[k][j] === newBoard[i][j]) {
  //               newBoard[k][j] *= 2;
  //               newBoard[i][j] = 0;
  //             } else {
  //               newBoard[k - 1][j] = newBoard[i][j];
  //               if (k - 1 !== i) {
  //                 newBoard[i][j] = 0;
  //               }
  //             }
  //             // newScore += newBoard[k][j];
  //           }
  //         }
  //       }
  //       break;
  //     default:
  //       break;
  //   }

  //   // 更新棋盘状态
  //   setBoard(newBoard)

  //   // 添加新的随机数
  //   addRandomNumber();
  // };

  //   // 复制棋盘
  //   const copyBoard = (board) => {
  //     return board.map(row => row.slice());
  //   };

  return (
    <View className={CSSModule["game-2048"]}>

      {JSON.stringify(initBoard)}
      <View className={CSSModule["board"]}>
        {initBoard.map((row, rowIndex) => (
          <div key={rowIndex} className='at-row'>
            {row.map((cell, colIndex) => (
              <div key={colIndex} className={`at-col`}>
                <div className={CSSModule['cell']}>{cell}</div>
              </div>
            ))}
          </div>
        ))}
      </View>

      {/* 显示分数 */}
      <View className="score">得分：{initScore}</View>

      {/* 操作按钮 */}
      <View className={CSSModule["buttons"]}>
        <AtButton className={CSSModule["button"]} onClick={() => handleSwipe('left')}>左</AtButton>
        <AtButton className={CSSModule["button"]} onClick={() => handleSwipe('up')}>上</AtButton>
        <AtButton className={CSSModule["button"]} onClick={() => handleSwipe('down')}>下</AtButton>
        <AtButton className={CSSModule["button"]} onClick={() => handleSwipe('right')}>右</AtButton>
      </View>
    </View>
  );
}

export default Game2048;
