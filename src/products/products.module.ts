import { Module,Global  } from '@nestjs/common';
import {ProductsService} from './products.service'
import {ProductsController} from './products.controller'
@Global()
@Module({
    controllers: [ProductsController],
    providers: [ProductsService],
    exports: [ProductsService],
  })
  export class ProductsModule {}