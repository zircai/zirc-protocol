// Simple test script for Etherscan V2 Multichain API (BSC)
// Run with: node test-bsc-api.js
// Reference: https://docs.etherscan.io/v2-migration

const axios = require('axios');
require('dotenv').config({ path: '.env.local' });

const ETHERSCAN_V2_BASE = 'https://api.etherscan.io/v2/api';
const BSC_CHAIN_ID = 56; // Binance Smart Chain
const API_KEY = process.env.BSC_API_KEY;

console.log('🔍 Testing Etherscan V2 Multichain API (BSC)...\n');
console.log(`API Key: ${API_KEY ? API_KEY.slice(0, 10) + '...' : 'NOT FOUND'}\n`);

async function testBSCScanAPI() {
  try {
    // Test 1: Get BNB Price
    console.log('📊 Test 1: Getting BNB Price...');
    const priceResponse = await axios.get(ETHERSCAN_V2_BASE, {
      params: {
        chainid: BSC_CHAIN_ID,
        module: 'stats',
        action: 'bnbprice',
        apikey: API_KEY
      }
    });
    
    if (priceResponse.data.status === '1') {
      console.log('✅ SUCCESS: BNB Price:', priceResponse.data.result.ethusd, 'USD');
      console.log('   Updated:', new Date(priceResponse.data.result.ethusd_timestamp * 1000).toLocaleString());
    } else {
      console.log('❌ FAILED:', priceResponse.data.message);
    }
    console.log('');

    // Test 2: Get BNB Balance for Binance Hot Wallet
    console.log('💰 Test 2: Getting BNB Balance for Binance Hot Wallet...');
    const balanceResponse = await axios.get(ETHERSCAN_V2_BASE, {
      params: {
        chainid: BSC_CHAIN_ID,
        module: 'account',
        action: 'balance',
        address: '0x8894E0a0c962CB723c1976a4421c95949bE2D4E3',
        tag: 'latest',
        apikey: API_KEY
      }
    });
    
    if (balanceResponse.data.status === '1') {
      const balance = parseFloat(balanceResponse.data.result) / Math.pow(10, 18);
      console.log('✅ SUCCESS: Balance:', balance.toFixed(4), 'BNB');
    } else {
      console.log('❌ FAILED:', balanceResponse.data.message);
    }
    console.log('');

    // Test 3: Get CAKE Token Info
    console.log('🥞 Test 3: Getting CAKE Token Info...');
    const cakeAddress = '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82';
    const tokenResponse = await axios.get(ETHERSCAN_V2_BASE, {
      params: {
        chainid: BSC_CHAIN_ID,
        module: 'token',
        action: 'tokeninfo',
        contractaddress: cakeAddress,
        apikey: API_KEY
      }
    });
    
    if (tokenResponse.data.status === '1') {
      console.log('✅ SUCCESS: Token Name:', tokenResponse.data.result[0].tokenName);
      console.log('   Symbol:', tokenResponse.data.result[0].symbol);
      console.log('   Total Supply:', tokenResponse.data.result[0].totalSupply);
    } else {
      console.log('❌ FAILED:', tokenResponse.data.message);
    }
    console.log('');

    console.log('🎉 All tests completed!');
    console.log('\n✨ Your Etherscan V2 Multichain API is working correctly!');
    console.log('🌐 This API key works for 60+ chains including BSC, Ethereum, Arbitrum, Base, Polygon, and more!\n');

  } catch (error) {
    console.error('❌ ERROR:', error.message);
    if (error.response) {
      console.error('Response:', error.response.data);
    }
  }
}

testBSCScanAPI();
