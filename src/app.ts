import { Config } from "./config"
import { IExample } from "./core/base";
import { Example1 } from "./examples/example1";
import { Example2 } from "./examples/example2";
import { Example3 } from "./examples/example3";
import { Example4 } from "./examples/example4";
import { Example5 } from "./examples/example5";
import { Example6 } from "./examples/example6";

export class App {
    protected getExample(): IExample {
      let mode: number = Config.getInstance().getParam ("exsample_mode")
      switch(mode) {
        case 1: return new Example1();
        case 2: return new Example2();
        case 3: return new Example3();
        case 4: return new Example4();
        case 5: return new Example5();
        case 6: return new Example6();
      }
    }

    public runExample(example: IExample ) {
      if(example === null || undefined) {
        console.log(`run example error!`);
        return;
      }

      example.run();
    }

    run () {
      this.runExample(this.getExample());
    }
}