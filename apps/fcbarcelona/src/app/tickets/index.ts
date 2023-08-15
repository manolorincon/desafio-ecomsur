import { Logger } from "@nestjs/common";
import { GetHtmlCodeService } from "../services/get-html-code/get-html-code.service"
import { TelegramService } from "../services/telegram/telegram.service";

const CHAT_ID = process.env.API_TELEGRAM_CHAT_ID; 

export const searchCode = async () => {
    const htmlService = new GetHtmlCodeService();
    const body = await htmlService.returnHtmlCode();
    const searchTerm = "modal		: 'regularplus'";
    if (body.includes('regularplus')) {
        const start = body.indexOf(searchTerm);
        if ( start > 1 ) {
            const slice = body.split(searchTerm)[1].slice(0, 30);
            if ( slice.includes('letmeknow') && slice.includes('false') ) {
                Logger.log('¡¡¡¡¡¡HAY ENTRADAS!!!!!!');
                Logger.log(body.split(searchTerm)[1].slice(0, 30));
                const telegramService = new TelegramService();
                await telegramService.sendTelegramMessage('HAY ENTRADAS!!!!!!', CHAT_ID);
            } else {
                Logger.log('Tickets not available yet.')
            }
        }
    }
}