import { HttpException, Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GetHtmlCodeService {

   async returnHtmlCode() {
        try {
            const response = await axios.get('http://localhost:3000/api/html-code');
            return response.data;
        } catch (error) {
            throw new HttpException('INTERNAL SERVER ERROR', 500);
        }
    }

}
