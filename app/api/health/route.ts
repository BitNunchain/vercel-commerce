import { NextResponse } from 'next/server';
import { getActiveChannel } from '@/lib/vendure';

export const dynamic = 'force-dynamic';

export async function GET() {
  const endpoint = process.env.VENDURE_API_ENDPOINT || 'http://localhost:3000/shop-api';
  try {
    const channel = await getActiveChannel();
    return NextResponse.json({
      status: 'ok',
      vendureEndpoint: endpoint,
      activeChannel: {
        code: channel.code,
        defaultCurrencyCode: channel.defaultCurrencyCode,
        defaultLanguageCode: channel.defaultLanguageCode
      }
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        status: 'error',
        vendureEndpoint: endpoint,
        message: error?.message || 'Vendure health check failed'
      },
      { status: 500 }
    );
  }
}
