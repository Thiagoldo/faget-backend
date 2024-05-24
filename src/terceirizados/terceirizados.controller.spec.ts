import { Test, TestingModule } from '@nestjs/testing';
import { TerceirizadosController } from './terceirizados.controller';
import { TerceirizadosService } from './terceirizados.service';

describe('TerceirizadosController', () => {
  let controller: TerceirizadosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TerceirizadosController],
      providers: [TerceirizadosService],
    }).compile();

    controller = module.get<TerceirizadosController>(TerceirizadosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
