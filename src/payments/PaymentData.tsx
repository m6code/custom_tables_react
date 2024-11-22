export type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
  s_n?: number;
};

export const payments: Payment[] = [
  { id: '728ed52f', amount: 100, status: 'pending', email: 'm@example.com' },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
  {
    id: 'b3f7a2c1',
    amount: 250,
    status: 'success',
    email: 'user1@company.com',
  },
  {
    id: 'd5e9f4a3',
    amount: 75,
    status: 'failed',
    email: 'customer@hotmail.com',
  },
  {
    id: 'e6c8b2d9',
    amount: 200,
    status: 'pending',
    email: 'sales@business.net',
  },
  {
    id: 'f1a7c3e5',
    amount: 150,
    status: 'processing',
    email: 'support@tech.org',
  },
  { id: 'g4h2j6k8', amount: 300, status: 'success', email: 'finance@corp.com' },
  { id: 'l9m7n3p5', amount: 50, status: 'failed', email: 'client@startup.io' },
  { id: 'q1r8s6t4', amount: 175, status: 'pending', email: 'team@project.co' },
  {
    id: 'u2v5w9x7',
    amount: 225,
    status: 'processing',
    email: 'admin@enterprise.net',
  },
  {
    id: 'y3z6a1b4',
    amount: 90,
    status: 'success',
    email: 'billing@service.com',
  },
  {
    id: 'c7d2e9f5',
    amount: 180,
    status: 'failed',
    email: 'contact@freelance.org',
  },
  { id: 'h1j4k6l3', amount: 275, status: 'pending', email: 'orders@store.net' },
  {
    id: 'm8n2p7q5',
    amount: 60,
    status: 'processing',
    email: 'help@platform.io',
  },
  { id: 'r3s9t1u6', amount: 220, status: 'success', email: 'info@digital.com' },
  {
    id: 'v4w7x2y9',
    amount: 135,
    status: 'failed',
    email: 'support@solutions.org',
  },
  { id: 'a5b8c1d6', amount: 95, status: 'pending', email: 'sales@global.net' },
  {
    id: 'e2f7g3h9',
    amount: 265,
    status: 'processing',
    email: 'team@innovation.com',
  },
  {
    id: 'i6j1k4l7',
    amount: 110,
    status: 'success',
    email: 'billing@enterprise.org',
  },
  { id: 'm3n8p5q2', amount: 195, status: 'failed', email: 'customer@tech.net' },
  {
    id: 'r7s2t9u4',
    amount: 160,
    status: 'pending',
    email: 'finance@company.com',
  },
  {
    id: 'v1w6x3y8',
    amount: 240,
    status: 'processing',
    email: 'orders@business.org',
  },
  {
    id: 'a9b4c7d2',
    amount: 85,
    status: 'success',
    email: 'support@service.net',
  },
  {
    id: 'e5f1g8h3',
    amount: 205,
    status: 'failed',
    email: 'contact@platform.com',
  },
  {
    id: 'i2j7k5l9',
    amount: 140,
    status: 'pending',
    email: 'admin@digital.org',
  },
  {
    id: 'm6n3p8q1',
    amount: 280,
    status: 'processing',
    email: 'sales@solutions.net',
  },
  {
    id: 'r4s9t2u7',
    amount: 70,
    status: 'success',
    email: 'help@enterprise.com',
  },
  {
    id: 'v5w1x6y3',
    amount: 215,
    status: 'failed',
    email: 'billing@global.org',
  },
  {
    id: 'a7b2c9d4',
    amount: 190,
    status: 'pending',
    email: 'team@innovation.net',
  },
  { id: 'e1f6g4h8', amount: 120, status: 'processing', email: 'info@tech.com' },
  {
    id: 'i3j9k2l5',
    amount: 260,
    status: 'success',
    email: 'orders@startup.org',
  },
  {
    id: 'm7n1p4q6',
    amount: 45,
    status: 'failed',
    email: 'support@business.net',
  },
  {
    id: 'r8s3t7u2',
    amount: 185,
    status: 'pending',
    email: 'finance@service.com',
  },
  {
    id: 'v9w4x1y5',
    amount: 130,
    status: 'processing',
    email: 'customer@digital.org',
  },
  {
    id: 'a3b7c2d9',
    amount: 245,
    status: 'success',
    email: 'contact@enterprise.net',
  },
  {
    id: 'e6f1g5h2',
    amount: 80,
    status: 'failed',
    email: 'admin@solutions.com',
  },
  {
    id: 'i4j8k1l7',
    amount: 210,
    status: 'pending',
    email: 'sales@platform.org',
  },
  {
    id: 'm2n6p3q8',
    amount: 165,
    status: 'processing',
    email: 'help@global.net',
  },
  {
    id: 'r5s9t4u1',
    amount: 235,
    status: 'success',
    email: 'billing@innovation.com',
  },
  { id: 'v7w2x5y9', amount: 115, status: 'failed', email: 'team@tech.org' },
  {
    id: 'a1b5c8d3',
    amount: 270,
    status: 'pending',
    email: 'info@business.net',
  },
  {
    id: 'e9f3g7h6',
    amount: 55,
    status: 'processing',
    email: 'support@service.com',
  },
  {
    id: 'i2j6k9l4',
    amount: 200,
    status: 'success',
    email: 'orders@digital.org',
  },
  {
    id: 'm8n4p1q7',
    amount: 145,
    status: 'failed',
    email: 'finance@enterprise.net',
  },
  {
    id: 'r3s7t2u5',
    amount: 230,
    status: 'pending',
    email: 'contact@solutions.com',
  },
  {
    id: 'v6w9x4y1',
    amount: 100,
    status: 'processing',
    email: 'admin@platform.org',
  },
  { id: 'a7b1c5d8', amount: 255, status: 'success', email: 'sales@global.net' },
  {
    id: 'e4f8g2h7',
    amount: 65,
    status: 'failed',
    email: 'help@innovation.com',
  },
  { id: '1a2b3c4d', amount: 50, status: 'pending', email: 'user1@example.com' },
  {
    id: '2b3c4d5e',
    amount: 75,
    status: 'processing',
    email: 'user2@example.com',
  },
  {
    id: '3c4d5e6f',
    amount: 100,
    status: 'success',
    email: 'user3@example.com',
  },
  { id: '4d5e6f7g', amount: 150, status: 'failed', email: 'user4@example.com' },
  {
    id: '5e6f7g8h',
    amount: 200,
    status: 'pending',
    email: 'user5@example.com',
  },
  {
    id: '6f7g8h9i',
    amount: 125,
    status: 'success',
    email: 'user6@example.com',
  },
  {
    id: '7g8h9i0j',
    amount: 80,
    status: 'processing',
    email: 'user7@example.com',
  },
  { id: '8h9i0j1k', amount: 60, status: 'failed', email: 'user8@example.com' },
  {
    id: '9i0j1k2l',
    amount: 110,
    status: 'pending',
    email: 'user9@example.com',
  },
  {
    id: '0j1k2l3m',
    amount: 130,
    status: 'success',
    email: 'user10@example.com',
  },
  { id: '1k2l3m4n', amount: 90, status: 'failed', email: 'user11@example.com' },
  {
    id: '2l3m4n5o',
    amount: 70,
    status: 'pending',
    email: 'user12@example.com',
  },
  {
    id: '3m4n5o6p',
    amount: 95,
    status: 'processing',
    email: 'user13@example.com',
  },
  {
    id: '4n5o6p7q',
    amount: 120,
    status: 'success',
    email: 'user14@example.com',
  },
  { id: '5o6p7q8r', amount: 55, status: 'failed', email: 'user15@example.com' },
  {
    id: '6p7q8r9s',
    amount: 140,
    status: 'pending',
    email: 'user16@example.com',
  },
  {
    id: '7q8r9s0t',
    amount: 210,
    status: 'processing',
    email: 'user17@example.com',
  },
  {
    id: '8r9s0t1u',
    amount: 85,
    status: 'success',
    email: 'user18@example.com',
  },
  {
    id: '9s0t1u2v',
    amount: 115,
    status: 'failed',
    email: 'user19@example.com',
  },
  {
    id: '0t1u2v3w',
    amount: 160,
    status: 'pending',
    email: 'user20@example.com',
  },
  {
    id: '1u2v3w4x',
    amount: 180,
    status: 'processing',
    email: 'user21@example.com',
  },
  {
    id: '2v3w4x5y',
    amount: 45,
    status: 'success',
    email: 'user22@example.com',
  },
  { id: '3w4x5y6z', amount: 35, status: 'failed', email: 'user23@example.com' },
  {
    id: '4x5y6z7a',
    amount: 75,
    status: 'pending',
    email: 'user24@example.com',
  },
  {
    id: '5y6z7a8b',
    amount: 220,
    status: 'processing',
    email: 'user25@example.com',
  },
  {
    id: '6z7a8b9c',
    amount: 180,
    status: 'success',
    email: 'user26@example.com',
  },
  { id: '7a8b9c0d', amount: 95, status: 'failed', email: 'user27@example.com' },
  {
    id: '8b9c0d1e',
    amount: 130,
    status: 'pending',
    email: 'user28@example.com',
  },
  {
    id: '9c0d1e2f',
    amount: 70,
    status: 'processing',
    email: 'user29@example.com',
  },
  {
    id: '0d1e2f3g',
    amount: 125,
    status: 'success',
    email: 'user30@example.com',
  },
  { id: '1e2f3g4h', amount: 60, status: 'failed', email: 'user31@example.com' },
  {
    id: '2f3g4h5i',
    amount: 105,
    status: 'pending',
    email: 'user32@example.com',
  },
  {
    id: '3g4h5i6j',
    amount: 210,
    status: 'processing',
    email: 'user33@example.com',
  },
  {
    id: '4h5i6j7k',
    amount: 150,
    status: 'success',
    email: 'user34@example.com',
  },
  { id: '5i6j7k8l', amount: 85, status: 'failed', email: 'user35@example.com' },
  {
    id: '6j7k8l9m',
    amount: 110,
    status: 'pending',
    email: 'user36@example.com',
  },
  {
    id: '7k8l9m0n',
    amount: 175,
    status: 'processing',
    email: 'user37@example.com',
  },
  {
    id: '8l9m0n1o',
    amount: 65,
    status: 'success',
    email: 'user38@example.com',
  },
  {
    id: '9m0n1o2p',
    amount: 115,
    status: 'failed',
    email: 'user39@example.com',
  },
  {
    id: '0n1o2p3q',
    amount: 140,
    status: 'pending',
    email: 'user40@example.com',
  },
  {
    id: '1o2p3q4r',
    amount: 200,
    status: 'processing',
    email: 'user41@example.com',
  },
  {
    id: '2p3q4r5s',
    amount: 90,
    status: 'success',
    email: 'user42@example.com',
  },
  {
    id: '3q4r5s6t',
    amount: 155,
    status: 'failed',
    email: 'user43@example.com',
  },
  {
    id: '4r5s6t7u',
    amount: 45,
    status: 'pending',
    email: 'user44@example.com',
  },
  {
    id: '5s6t7u8v',
    amount: 70,
    status: 'processing',
    email: 'user45@example.com',
  },
  {
    id: '6t7u8v9w',
    amount: 80,
    status: 'success',
    email: 'user46@example.com',
  },
  { id: '7u8v9w0x', amount: 95, status: 'failed', email: 'user47@example.com' },
  {
    id: '8v9w0x1y',
    amount: 150,
    status: 'pending',
    email: 'user48@example.com',
  },
  {
    id: '9w0x1y2z',
    amount: 175,
    status: 'processing',
    email: 'user49@example.com',
  },
  {
    id: '0x1y2z3a',
    amount: 200,
    status: 'success',
    email: 'user50@example.com',
  },
];

payments.forEach((payment, index) => {
  payment.s_n = index + 1;
});
