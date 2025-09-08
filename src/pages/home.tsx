// import { Icon } from '../lib/types';
import { ShoppingCartIcon, TimerIcon, PackageIcon, CoffeeIcon } from "@phosphor-icons/react"
// import { ForwardRefExoticComponent } from "react";
// import { IconProps } from "@phosphor-icons/react";

// function IconOption({icon: IconComponent, backgoundColor: string, text: string}){
//   return (
//     <div>
//       <IconComponent className=`${backgoundColor}`/>
//       <p>{text}</p>
//     </div>
//   )
// }


// interface OptionProps {
//   icon: ForwardRefExoticComponent<IconProps>;
//   backgroundColor: string;
//   text: string;
// }

function Option({ icon: IconComponent, backgroundColor, text }) {
  return (
    <div className="flex items-center gap-3">
      {/* FIXME O icone dentro do círculo está estranho */}
      <IconComponent 
        className={`${backgroundColor} size-8 p-1.5 rounded-full text-white`} 
        weight="fill"
      />
      <p className="text-base-text">{text}</p>
    </div>
  );
}

export function Home(){
  return (
    //FIXME Tente outras combinações para o tamanho/posição da imagem.
    // O fato da 'area de atuação' da tela ser diferente para diferentes monitores
    // não será possível deixar igual no figma.
    <div className="mt-24 bg-[url('/src/assets/background.png')] bg-fixed"> 
      <div className="flex justify-between">
        <div className="max-w-[588px]">
          <p className="font-baloo font-extrabold text-5xl text-base-title ">Encontre o café perfeito para qualquer hora do dia</p>
          <p className="text-xl mt-4 text-base-subtitle">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          
          {/* options */}
          <div className="mt-16 grid grid-cols-2 gap-10">
            <Option 
              icon={ShoppingCartIcon}
              backgroundColor="bg-yellow-dark"
              text="Compra simples e segura"
            />
            <Option 
              icon={PackageIcon}
              backgroundColor="bg-base-text"
              text="Embalagem mantém o café intacto"
            />
            <Option 
              icon={TimerIcon}
              backgroundColor="bg-yellow"
              text="Entrega rápida e rastreada"
            />
            <Option 
              icon={CoffeeIcon}
              backgroundColor="bg-purple"
              text="O café chega fresquinho até você"
            />
          </div>

        </div>


        <img src="./src/assets/banner.png" alt="Banner" />
      </div>



    </div>    
  )
}