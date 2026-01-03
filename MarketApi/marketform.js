import {world,system,ItemStack} from '@minecraft/server'
import {ActionFormData,ModalFormData,MessageFormData} from '@minecraft/server-ui'

export class MarketForm {
  constructor(title, cats){
    this.title = title || "Market"
    this.cats = cats
  }
  
  show(target,catindex){
    const f = new ActionFormData();
    f.title("§m§a§r§k§e§t§r"+this.title)
    
    for(let i = 0; i < 30; i++){
      const name = this.cats[catindex]?.items[i]?.name ?? ""
      const price = this.cats[catindex]?.items[i]?.price ?? ""
      const icon = this.cats[catindex]?.items[i]?.icon ?? ""
      
      f.button(`$${price}:/:${name}`, icon)
    }
    for(let i = 0; i < 7; i++){
      const name = this.cats[i]?.name ?? ""
      const icon = this.cats[i]?.icon ?? ""
      const prefix = i === catindex ? "§s§e§l§r" : ""
      
      f.button(prefix+name, icon)
    }
    
    f.show(target).then(r=>{
      const {selection: sel,canceled} = r;
      if(canceled) return;
      if(sel < 30){
        const func = this.cats[catindex]?.items[sel]?.func
        if(func) func(target)
      }else{
        this.show(target, sel-30)
      }
    })
  }
}