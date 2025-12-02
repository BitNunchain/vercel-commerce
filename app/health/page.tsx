import { getActiveChannel } from '@/lib/vendure';

export const dynamic = 'force-dynamic';

export default async function HealthPage() {
  const endpoint = process.env.VENDURE_API_ENDPOINT || 'http://localhost:3000/shop-api';
  try {
    const channel = await getActiveChannel();
    return (
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-4">Health Check</h1>
        <div className="space-y-2">
          <div>
            <span className="font-medium">Vendure Endpoint:</span> {endpoint}
          </div>
          <div>
            <span className="font-medium">Active Channel:</span> {channel.code}
          </div>
          <div>
            <span className="font-medium">Currency:</span> {channel.defaultCurrencyCode}
          </div>
          <div>
            <span className="font-medium">Default Language:</span> {channel.defaultLanguageCode}
          </div>
        </div>
      </div>
    );
  } catch (e: any) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-4">Health Check</h1>
        <p className="text-red-600">Error: {e?.message || 'Vendure health check failed'}</p>
        <p className="mt-2 text-sm text-gray-500">Endpoint: {endpoint}</p>
      </div>
    );
  }
}
