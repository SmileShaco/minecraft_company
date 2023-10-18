import { system, world } from '@minecraft/server'

system.runInterval(() => {
    const players = world.getAllPlayers();//すべてのプレイヤーを取得
    for(const player of players){
        const result = player.runCommand(`testfor @s[hasitem={item=torch, location=slot.weapon.mainhand}]`)
        //resultが成功したかどうか
        if(result.successCount > 0){
            player.runCommand(`effect @s night_vision 12 1 true`)
        }
    }
}, 20)//20tickごとに実行する

