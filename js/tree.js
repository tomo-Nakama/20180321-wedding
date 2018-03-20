var drawTree = function(ctx, startX, startY, length, angle, depth, branchWidth) {
  var rand = Math.random,
    newLength, newAngle, newDepth, maxBranch = 3,
    endX, endY, maxAngle = 2 * Math.PI / 4,
    subBranches, lenShrink;
  // 枝を描画する。angleに応じて右か左に傾ける。
  // 最初の枝（幹）は、上向きに描画する（angle = 1.571ラジアン）
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  endX = startX + length * Math.cos(angle);
  endY = startY + length * Math.sin(angle);
  ctx.lineCap = 'round';
  ctx.lineWidth = branchWidth;
  ctx.lineTo(endX, endY);

  // 末端の枝に近づくと、葉に見えるように緑にする
  if (depth <= 2) {
    ctx.strokeStyle = 'rgb(0,' + (((rand() * 64) + 128) >> 0) + ',0)';
  }
  // それ意外は、ランダムに茶色にする
  else {
    ctx.strokeStyle = 'rgb(' + (((rand() * 64) + 64) >> 0) + ',50,25)';
  }
  ctx.stroke();

  // 枝の再帰レベルを減らす
  newDepth = depth - 1;
  // 再帰レベルが0になったら、それ以上、枝を伸ばさないようにする。
  if (!newDepth) {
    return;
  }
  // 現在の枝をランダムな数（最大3本）の新しい枝に分岐させる。
  // 自然な外観にするため、長さと角度にランダムな値を付与する。
  subBranches = (rand() * (maxBranch - 1)) + 1;
  // 新しい枝の幅を減らす
  branchWidth *= 0.7;
  // drawTreeを再帰的に呼び出し、新しい値で枝を描画する
  for (var i = 0; i < subBranches; i++) {
    newAngle = angle + rand() * maxAngle - maxAngle * 0.5;
    newLength = length * (0.7 + rand() * 0.3);
    drawTree(ctx, endX, endY, newLength, newAngle, newDepth, branchWidth);
  }
};

document.addEventListener("DOMContentLoaded", function() {
  let canvas = document.getElementById('tree')
  let ctx = canvas.getContext('2d');
  drawTree(ctx, 320, 470, 60, -Math.PI / 2, 12, 12);

}, false);
