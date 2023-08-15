import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';

const TELEGRAM_TOKEN = process.env.API_TELEGRAM_TOKEN; 

@Injectable()
export class TelegramService {

    async sendTelegramMessage(message: string, chatId: string): Promise<void> {
        const apiUrl = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
        // know the bot chat id_
        // create the bot, the channel, add the bot to the channel, send a message and then execute the above request
        // const apiUrl = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/getUpdates`;
        try {
            const response = await axios.post(apiUrl, {
                chat_id: chatId,
                text: message,
            });
            if (response.status !== 200) {
                throw new Error(`Telegram API request failed with status code: ${response.status}`);
            }
            Logger.log(`Message sent successfully. Data: ${ JSON.stringify(response.data)}`);
        } catch (error) {
            Logger.log(`Error sending telegram message. Error: ${error.message}`);
            throw new Error(`Telegram API request failed with error: ${error.message}`);
        }
    }

}
