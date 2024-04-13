let allproducts = [
  {
    id: 1,
    name: "Men's Casual Shirt",
    category: "Men",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRRfO1WBaQGbRalB_pGlmOyyiOYjLZKAWwMVXMPd0EQ_AF0SPlQk2NX-Di1iKcVng9EaG7hy8z5nP96t8_4PyH-viQH37LGOs4HSmecOEW-&usqp=CAE",
    old_price: 399.99,
    new_price: 299.99
  },
  {
    id: 2,
    name: "Women's Summer Dress",
    category: "Women",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSurGRKGxEGaZesOOk-zFEEvksoro9OymTDzFbYl12qNjqSQT26HyXbg1hjU_bdNhC4ocesjjeTqPZcq5CKDtanyrbQOVk4CKcZGp5dMK6yHbsWwSupFsnl&usqp=CAE",
    old_price: 499.99,
    new_price: 349.99
  },
  {
    id: 3,
    name: "Kids' Printed T-Shirt",
    category: "Kids",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRM_HR68xkTGhajmKvILy2d6SxWk8ByQsRYMvRx0olfQAvv6MX7ASernunWaC_uCbZ82-dVkFqt-4zNwOg_gAGJ582KcLh7J6rMuc8FeeIe&usqp=CAE",
    old_price: 199.99,
    new_price: 149.99
  },
  {
    id: 4,
    name: "Men's Formal Trousers",
    category: "Men",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcThKtWq9wdszhz9qh5xjOyuNcfTQ_Oy5cpBBTDhLFAyKjYnkWOMNRPl_uPPhIhYC0ak7WJSZb6k_vD8P5FdLwB24e8YQRxSEDrv_3dt93HY&usqp=CAE",
    old_price: 599.99,
    new_price: 449.99
  },
  {
    id: 5,
    name: "Women's Running Shoes",
    category: "Women",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTZiPthpfrlVf0WXRBPIqbeUIgF8piWimOz_v8bGvysEj2ZptRKmKiwf7uWX0UCglo0GhNCco9hvaAFnStJRZu8nD1xGJ6acTgmtXFn3KyKy7gUCHilCEBP&usqp=CAE",
    old_price: 799.99,
    new_price: 649.99
 }
,
  {
    "id": 6,
    "name": "Kids' Denim Jacket",
    "category": "Kids",
    "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSwJWuhMDBbemPQWbxxgiMJWaXLv-MiK7K4FgznAYccs-l8fdZQf0Y9QNGcj_X2WR0b191hikunyQ7jBeUbtS-oYS8p1ZyxT9IoYTpqi5AYNNx7S-Tg6CaC&usqp=CAE",
    "old_price": 349.99,
    "new_price": 249.99
  },
  {
    "id": 7,
    "name": "Men's Hooded Sweatshirt",
    "category": "Men",
    "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwcld7_fH25hwodQp5XpmLDvQwd5fzzhe9If_a7vgS-HWzSV-sYrJVUbmdTAiQyDzCfUXbPcaabHI5eoZ6no0-Wc6dRNQDAGZQSWjPCgY&usqp=CAE",
    "old_price": 449.99,
    "new_price": 349.99
  },
  {
    "id": 8,
    "name": "Women's Winter Coat",
    "category": "Women",
    "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS-JMO3d9P6-0xOgZw78vt_bI3KEb18Y477TtHJW5InT0XqlFdCTV_hgSFMJh_fGLYIgbvPQg4mR4e8MBOlvjdlmsL-hOui908JMMMLwdNqc4-cj26m7YdH&usqp=CAE",
    "old_price": 899.99,
    "new_price": 699.99
  },
  {
    "id": 9,
    "name": "Kids' Striped Sweater",
    "category": "Kids",
    "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQlMxY_7UVPqtYMdK6IlgNMEEqX2zuoh1jGpsnLTkYUKdP1SgNmfAbmt81qzod0MkVrtsftIiF8OwUJzZZKjooDE8dpibkrQDg4RXI_cEP7VDapCOT9ByO5gA&usqp=CAE",
    "old_price": 299.99,
    "new_price": 199.99
  },
  {
    "id": 10,
    "name": "Men's Leather Belt",
    "category": "Men",
    "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRBZuXUWF7qNGBWxXnJzRSRflEAon_sAcdvQn8NHUZIQ5kI-sPgdcIYB1uVGlwXXu-zkY8fcGFokZv0a6Er2CFt4rxcTin_3zpe1HQ_ASNhRelsYmxCdPXr&usqp=CAE",
    "old_price": 249.99,
    "new_price": 199.99
  },
  {
    "id": 11,
    "name": "Women's Leather Handbag",
    "category": "Women",
    "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSI61uPiHMxgb9cDseNjmO7WnijE60mUBgmGxCktJk7htRXEHzFhOcTGKkmrTQtrx47fG0zl3b1vqmC_Zw967NHtueiMQgFogyWdjzs_pcQT0oWuBmL8ZUJ&usqp=CAE",
    "old_price": 599.99,
    "new_price": 499.99
  },
  {
    "id": 12,
    "name": "Kids' Plaid Shirt",
    "category": "Kids",
    "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSO25ITx2WC5g0X8NK7E7zgxivyV7TkZTCM_hZLgkPfo1BrE1O6dh0HE1l_-XS94PZmDueekITAIbuyOBNVSrpZsukJiN1ygxQrHqZ3Y1WdrUN4uzyD_M-7&usqp=CAE",
    "old_price": 229.99,
    "new_price": 169.99
  },
  {
    "id": 13,
    "name": "Men's Sunglasses",
    "category": "Men",
    "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQi2vT1nbITWBGlm9tMliejsecM4NjbC7mgI7hn1yQDW-yk3qxtCBBKk6XkwcKK0XRaE93Tv1aTC8zIZCyI0CRbccn8Epk2b8azR0Zhjpo&usqp=CAE",
    "old_price": 299.99,
    "new_price": 249.99
  },
  {
    "id": 14,
    "name": "Women's Sun Hat",
    "category": "Women",
    "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSV2VwdnTwLOwQ3OHvDSdhjiD12SvH_Np1MUJUlWzYUD6B3aygjzW1TtJ7d8UPFBg2nQaKyHGUn5rzrIoaaAO0DTWplvz9AzYg54whWeMVp&usqp=CAE",
    "old_price": 149.99,
    "new_price": 99.99
  },
  {
    "id": 15,
    "name": "Kids' Cartoon Backpack",
    "category": "Kids",
    "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRhQ4xj8PfT6K7b4oOM-MM5MHY6CC71ePEGLntLe27iGT6O-adM8iEw6O88JRMC9jMXg85kz-1zJRPYSduRo11CPYk_QaVfBrTTjRB3IniF&usqp=CAE",
    "old_price": 399.99,
    "new_price": 299.99
  },
  {
    "id": 16,
    "name": "Men's Formal Shoes",
    "category": "Men",
    "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT--x6ozdHmY5Xsvvz_7E4O1pYe_ZQ-FBvqyYJE9AkKi4ece1wdOxnQO7RzKjRYGtW230HlJzFjShXZ38JlTs8LW3LCXhOfunUq3HOypPtK&usqp=CAE0",
    "old_price": 699.99,
    "new_price": 549.99
  },
  {
    "id": 17,
    "name": "Women's Elegant Blouse",
    "category": "Women",
    "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT_45k8fz2uVJ1TDF8nRe4DNyY_v_1DYa6KIy26Y-xDrYD87YmCeqQ8edvlXPA-1vsnCFGVgw3YDIaK5zreK1WF8DPdt5xGus7nQVmQZzExUW7Rksrou-wSsA&usqp=CAE",
    "old_price": 349.99,
    "new_price": 249.99
  },
  {
    "id": 18,
    "name": "Kids' Pajama Set",
    "category": "Kids",
    "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTfmdmDq8rB_Nb20TQh34L9ELmY-DsVO3VNAw8MMZyBq48rj54s_s6D14BiqAqWEbvK45dtxrizZO6cmrItYMZZY9pCwAM3KNffQOVdkuk&usqp=CAE",
    "old_price": 199.99,
    "new_price": 149.99
  },
  {
    "id": 19,
    "name": "Men's Winter Jacket",
    "category": "Men",
    "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRK3ukpfM1MO-bKOJELu0XaQeQ40R9oc5nYX0Pi561m3d2J1M7dtlCZFzULmXJ_US5aXd2ssTNrgXYr_-buK_y2I4HPPGVC6_IE2H1BTDTo&usqp=CAE",
    "old_price": 799.99,
    "new_price": 599.99
  },
  {
    "id": 20,
    "name": "Women's High Heels",
    "category": "Women",
    "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT5bI983vTVlwLWO7A8l6v5tOQ2L_IdlldfwARfu5REnBsb44GVW26zWNE43nEmTRRFz99QYe0yjMCsDvgggF_Dg-sWzlxAofBLhR-d7g49TYFkwgK-wsaQ&usqp=CAE",
    "old_price": 499.99,
    "new_price": 399.99
  },
  {
    "id": 21,
    "name": "Kids' Raincoat",
    "category": "Kids",
    "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTREKd47vyfNsexcId-y-iG0dm6eLOBGMu8ZCmSIvln0USnSErQHVXTU4sCQbJXR6Okx6asAsMkBw0cguZk6a_vZtZYchnnAPYoRcmSVaiqMMWQnfxuVlNZ&usqp=CAE",
    "old_price": 299.99,
    "new_price": 249.99
  },
  {
    "id": 22,
    "name": "Men's Denim Jeans",
    "category": "Men",
    "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSU1Zo9xSQlnmAD7cYvB7_oacm3qJ78CJI40xhTBRS0Et_CCU03t8Ygrx0ft1G39zqLM2jRNGsNIOMzef4nLySJEP7ab58mMUCvsx7xyKrxSsg5PjxaSCsv&usqp=CAE",
    "old_price": 499.99,
    "new_price": 399.99
  },
  {
    "id": 23,
    "name": "Women's Office Skirt",
    "category": "Women",
    "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTEq_3ntY4yTsWKNKZqAz37jX5nb25j1RMZ1l7dFoVAMEbJVix_8iI9VSAoep2M7ONTzU6deNcgaqwXIIbCs5Hokr0NvqNxqZqsN4UvVrJD&usqp=CAE",
    "old_price": 399.99,
    "new_price": 299.99
  },
  {
    "id": 24,
    "name": "Kids' Sports Shorts",
    "category": "Kids",
    "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ-o6TAJlYkVvBYF6gsMphSJv4OzrvokD2qk0PyK9QzVGfiYTZXnVfq7xszEf8i6A2TpvlofOE6nXiOiM-VRs-_HJCqB6TsrqiAzJyqCw13zFISEgci4UeQmA&usqp=CAE",
    "old_price": 149.99,
    "new_price": 99.99
  },
  {
    "id": 25,
    "name": "Men's Polo T-Shirt",
    "category": "Men",
    "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSdKDpwEIohsgtRVAibugAfKlbg2-KK5WraRf7YWYVnbQbmEi74humcPDxAXN3A7dbNAy9woeb6LC5CDkISi_pjrHu3-gD_ZULcIO0qQAQ&usqp=CAE",
    "old_price": 249.99,
    "new_price": 199.99
  },
  {
    "id": 26,
    "name": "Women's V-neck Sweater",
    "category": "Women",
    "image": "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/8/6818a66STPV03WW7108-FP_1.jpg?rnd=20200526195200&tr=w-512",
    "old_price": 499.99,
    "new_price": 349.99
  },
  {
    "id": 27,
    "name": "Kids' Printed Leggings",
    "category": "Kids",
    "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRQpdmNaLetE5Mg_R77eDcBsJ2HCc85lEuxU1o3Sa7Hsvt_WTADBYiT8hL42zoFaqVN_kQCaLr5FbH7foWtK4T3yGP0ZuW3G009XKyqpwsW&usqp=CAE",
    "old_price": 199.99,
    "new_price": 149.99
  },
  {
    "id": 28,
    "name": "Men's Leather Wallet",
    "category": "Men",
    "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcShRG9Mo-TPoP6GqWkEoamMWwhWMgYJ87SDwSEZ7s65npAzz_9xBzb1IKiXlaU2qHQjbN1G5Dma7hswogySs4ESr3vm7jtWNT21T8NRLog&usqp=CAE",
    "old_price": 299.99,
    "new_price": 249.99
  },
  {
    "id": 29,
    "name": "Women's Crossbody Bag",
    "category": "Women",
    "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSzmTxnAfaqvnL5NOrHk-Tw5_c8SPFkZ3NxblwYLKA14qwtVn65umy__ZD_5bxhZBRH4YRTjD2S50-Y_4V4eD-vIEs-tBgUIgpW6K5y6UVKbv2UNwgMUtkD&usqp=CAE",
    "old_price": 399.99,
    "new_price": 299.99
  },
  {
    "id": 30,
    "name": "Kids' Hooded Jacket",
    "category": "Kids",
    "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQWCGA8kKo-xB58EgeT5XFI9oN_73cF_a6eTzVXVMPIN4dGjgDA5h6vOsmQiib-Vogpyb9b6gLEtlQcKLEV0B2ua9nD-Qw69oMEaRohJhEX&usqp=CAE",
    "old_price": 349.99,
    "new_price": 249.99
  },
  {
    "id": 31,
    "name": "Men's Casual Shorts",
    "category": "Men",
    "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRTlAmgZ08RowYjghP7j8F2KJSN0PEu5xJNHT-MhzABsU8r0N9w8inFK2NRfMOBoowMMdqPSx2PHGW5P6qq5l2UlQSOOW2W7l1vTcfryUyeKkDEYEU-UB20&usqp=CAE",
    "old_price": 299.99,
    "new_price": 249.99
  },
  {
    "id": 32,
    "name": "Women's Floral Maxi Dress",
    "category": "Women",
    "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQaUkXw9QYrMvGwu9yuzPG58pmm4cCyf9FHmBpMxy4Ug_OLVznLsKHFubLr_Ov4gqVsYZ6KM4mg2do02nJh50peDBF3CL--J8nYVLbxu_EICak5K_0_jDWy&usqp=CAE",
    "old_price": 699.99,
    "new_price": 549.99
  },
  {
    "id": 33,
    "name": "Kids' Graphic T-Shirt",
    "category": "Kids",
    "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRbToUEdu47pO5G0pWJSYCaoq-JBnMPN-UrQ5n_rqPFubVD3ChyLUN7AjPtfTVwH5669jnHnPJ-E3PytM_51e3Ux5WT1lZGl-GSYdkbZKk&usqp=CAE",
    "old_price": 149.99,
    "new_price": 99.99
  },
  {
    "id": 34,
    "name": "Men's Formal Blazer",
    "category": "Men",
    "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcROWOEHnXimG8Ro2-b6XUiE4jPpn7_4hFk5MicuG3wa24pH_QCe_9L0-g9kwLSmioiY6SvIhhAr16xsFl1gIhY1oAZVE-WrBRe0KPx0yYQ&usqp=CAE",
    "old_price": 899.99,
    "new_price": 699.99
  },
  {
    "id": 35,
    "name": "Women's Skinny Jeans",
    "category": "Women",
    "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSBwdefcyU9hUt8Q9nvmE7b6s61SIvfhj1xgXCP8VvqO4CWgCQMbEhOErxi6BaGKhsgqJsKxBseZifOtpdS6DlcyVfLNLcbJjbPG_rZGw6VuGlEykOzgJtsOg&usqp=CAE",
    "old_price": 449.99,
    "new_price": 349.99
  },
  {
    "id": 36,
    "name": "Kids' Party Dress",
    "category": "Kids",
    "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ5795YSj-kehf0DfROi9GyfSPt7g--6tazFPMiA97TUJDcnQxHeVEnBOJ8fwRhkw56V1xUhN3U65bIOoDuGVEXFRTgfuxoTDqJ27jv0JRH&usqp=CAE",
    "old_price": 499.99,
    "new_price": 399.99
  },
  {
    "id": 37,
    "name": "Men's Casual Sneakers",
    "category": "Men",
    "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTITzqtVuDmleR5-7uHAGunRS6vQsNsCs-0o-rAxwrEuHl8V56m5wuFBRNcGLXwPVjY7lx8OFKedYDQkoAnf-k3eeFagO5dfUYd39p_CAGC&usqp=CAE",
    "old_price": 599.99,
    "new_price": 449.99
  },
  {
    "id": 38,
    "name": "Women's Wool Scarf",
    "category": "Women",
    "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRjzYIaXp_1mUUCJPrOqlj3MdX6OCG-qh3HWyxNkApv9El1jfqAlVnpt0i-F5IT7rFXTF0VOTj0I3PS6gOpcqLLc-bdBML-K4e-DNSH-bgZkL0uCROg113X&usqp=CAE",
    "old_price": 199.99,
    "new_price": 149.99
  },
  {
    "id": 39,
    "name": "Kids' Fleece Sweatpants",
    "category": "Kids",
    "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQTau6Vfp6wzQ8JBbKrUuT630cBJy0-emfwzFTyQRtkBaplTKBd-FtG9XHon0TwfPrs4lk717My2gQ-sW2YlSJQljjSEsukDJlBJDERWtXzO93KXth5Vyp9&usqp=CAE",
    "old_price": 249.99,
    "new_price": 199.99
  },
  {
    "id": 40,
    "name": "Men's Plaid Flannel Shirt",
    "category": "Men",
    "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQqhqpkk2DHZe6Hk93jCc1GJvIQW3bMCd78JKijKWZVh1wg73_K0HpMS0oFvHdvmP1aguY-mlwyD3zKKA3eZqEETe8Ib1bn2rAnFjKjtLIZSM8b7Wl7diiyFA&usqp=CAE",
    "old_price": 349.99,
    "new_price": 249.99
  }
];

export default allproducts;
