import { Test, TestingModule } from '@nestjs/testing';
import { HtmlCodeController } from './html-code.controller';

describe('HtmlCodeController', () => {
  let controller: HtmlCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HtmlCodeController],
    }).compile();

    controller = module.get<HtmlCodeController>(HtmlCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
