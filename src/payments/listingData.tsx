export type ListingsResponse = {
  data: ListingsResponseDatum[];
  meta: Meta;
};

export type ListingsResponseDatum = {
  id: string;
  type: FluffyType;
  attributes: PurpleAttributes;
};

export type PurpleAttributes = {
  amenities: Amenities;
  available_date: string;
  description: null;
  price: Price;
  status: FluffyStatus;
  price_in_currency: number;
  property_unit: PropertyUnit;
  images: Images;
};

export type Amenities = object;

export type Images = {
  data: ImagesDatum[];
};

export type ImagesDatum = {
  id: string;
  type: PurpleType;
  attributes: FluffyAttributes;
};

export type FluffyAttributes = {
  url: string;
};

export type PurpleType = 'listing_image';

export type Price = {
  cents: number;
  currency_iso: CurrencyISO;
};

export type CurrencyISO = 'CAD';

export type PropertyUnit = {
  data: Data;
};

export type Data = {
  id: string;
  type: DataType;
  attributes: DataAttributes;
};

export type DataAttributes = {
  document_urls: Amenities;
  external_landlord_prly_id: null;
  name: string;
  size: null;
  status: PurpleStatus;
  unit_number: null;
  unit_identifier: string;
  open_listing_id: string;
  property: Property;
};

export type Property = {
  id: string;
  name: string;
  city: string;
  country: Country;
  postal_code: null;
  street_address: string;
  territory: Territory;
};

export type Country = 'Canada';

export type Territory = 'fake-territory';

export type PurpleStatus = 'active';

export type DataType = 'property_unit';

export type FluffyStatus = 'open';

export type FluffyType = 'listing';

export type Meta = {
  current_page: number;
  items_on_page: number;
  last_page: number;
  next_page: number;
  prev_page: null;
  total_count: number;
};

export const listings: ListingsResponse = {
  data: [
    {
      id: 'ceaee539-a080-4a69-83f0-30e006590738',
      type: 'listing',
      attributes: {
        amenities: {},
        available_date: '2024-12-01',
        description: null,
        price: {
          cents: 102300,
          currency_iso: 'CAD',
        },
        status: 'open',
        price_in_currency: 1023,
        property_unit: {
          data: {
            id: '88da168e-72c0-4498-91a6-fe6e8259e990',
            type: 'property_unit',
            attributes: {
              document_urls: {},
              external_landlord_prly_id: null,
              name: 'Suite 252',
              size: null,
              status: 'active',
              unit_number: null,
              unit_identifier: 'Suite 252',
              open_listing_id: 'ceaee539-a080-4a69-83f0-30e006590738',
              property: {
                id: '0f575fcb-b634-4c7b-a136-15923d47c464',
                name: '59764 Denesik Plains',
                city: 'Barrie',
                country: 'Canada',
                postal_code: null,
                street_address: '59764 Denesik Plains',
                territory: 'fake-territory',
              },
            },
          },
        },
        images: {
          data: [
            {
              id: 'c386cf66-d15d-4068-bd98-f763513f1cf2',
              type: 'listing_image',
              attributes: {
                url: 'https://dummyimage.com/300x300/84f8c9/6a888c.png?text=',
              },
            },
          ],
        },
      },
    },
    {
      id: '9bd7eb73-2302-4457-899b-41789d834eec',
      type: 'listing',
      attributes: {
        amenities: {},
        available_date: '2024-12-01',
        description: null,
        price: {
          cents: 152200,
          currency_iso: 'CAD',
        },
        status: 'open',
        price_in_currency: 1522,
        property_unit: {
          data: {
            id: '3a3d935f-0445-4f1a-b694-8ed4de9585f3',
            type: 'property_unit',
            attributes: {
              document_urls: {},
              external_landlord_prly_id: null,
              name: 'Suite 243',
              size: null,
              status: 'active',
              unit_number: null,
              unit_identifier: 'Suite 243',
              open_listing_id: '9bd7eb73-2302-4457-899b-41789d834eec',
              property: {
                id: '82af48df-ebf2-493a-9dd2-e257129a0be1',
                name: '27704 Rachel Cliffs',
                city: 'Dollard-des-Ormeaux',
                country: 'Canada',
                postal_code: null,
                street_address: '27704 Rachel Cliffs',
                territory: 'fake-territory',
              },
            },
          },
        },
        images: {
          data: [
            {
              id: '1d383b4a-2f09-431e-8366-3e2ed0013ec4',
              type: 'listing_image',
              attributes: {
                url: 'https://dummyimage.com/300x300/448214/5c74aa.png?text=',
              },
            },
          ],
        },
      },
    },
    {
      id: '25ebfb1a-6df1-40d0-a069-f8f3f39d101b',
      type: 'listing',
      attributes: {
        amenities: {},
        available_date: '2024-12-01',
        description: null,
        price: {
          cents: 405300,
          currency_iso: 'CAD',
        },
        status: 'open',
        price_in_currency: 4053,
        property_unit: {
          data: {
            id: 'fa15d353-ecac-4cf4-b0a2-1db385e54d4d',
            type: 'property_unit',
            attributes: {
              document_urls: {},
              external_landlord_prly_id: null,
              name: 'Apt. 873',
              size: null,
              status: 'active',
              unit_number: null,
              unit_identifier: 'Apt. 873',
              open_listing_id: '25ebfb1a-6df1-40d0-a069-f8f3f39d101b',
              property: {
                id: 'f6a0915b-7450-4a47-ba1a-cdb415a8cbab',
                name: '28939 Bode Shores',
                city: 'Saint-Jérôme',
                country: 'Canada',
                postal_code: null,
                street_address: '28939 Bode Shores',
                territory: 'fake-territory',
              },
            },
          },
        },
        images: {
          data: [
            {
              id: 'f1715c1a-3ff9-48f3-8c9a-d16a078a134b',
              type: 'listing_image',
              attributes: {
                url: 'https://dummyimage.com/300x300/140f47/3a9380.png?text=',
              },
            },
          ],
        },
      },
    },
    {
      id: '28e2382c-7329-46a1-9cfa-bff60c922787',
      type: 'listing',
      attributes: {
        amenities: {},
        available_date: '2024-12-01',
        description: null,
        price: {
          cents: 192600,
          currency_iso: 'CAD',
        },
        status: 'open',
        price_in_currency: 1926,
        property_unit: {
          data: {
            id: '5f701d77-e679-43c9-9cfe-c1b506387787',
            type: 'property_unit',
            attributes: {
              document_urls: {},
              external_landlord_prly_id: null,
              name: 'Suite 515',
              size: null,
              status: 'active',
              unit_number: null,
              unit_identifier: 'Suite 515',
              open_listing_id: '28e2382c-7329-46a1-9cfa-bff60c922787',
              property: {
                id: 'ef8e42a0-f9ee-4053-bb4c-f22e1a84bbec',
                name: '62486 Leslie Corner',
                city: 'Kearney',
                country: 'Canada',
                postal_code: null,
                street_address: '62486 Leslie Corner',
                territory: 'fake-territory',
              },
            },
          },
        },
        images: {
          data: [
            {
              id: 'd14e24f9-bea2-4413-8193-1639e25f7ca9',
              type: 'listing_image',
              attributes: {
                url: 'https://dummyimage.com/300x300/bd97f0/c6c019.png?text=',
              },
            },
          ],
        },
      },
    },
    {
      id: '63ca2aa6-eb59-494d-96b5-d1bb2216860b',
      type: 'listing',
      attributes: {
        amenities: {},
        available_date: '2024-12-01',
        description: null,
        price: {
          cents: 223700,
          currency_iso: 'CAD',
        },
        status: 'open',
        price_in_currency: 2237,
        property_unit: {
          data: {
            id: '0c1d9f29-a761-41f5-a4af-df65d9d50eef',
            type: 'property_unit',
            attributes: {
              document_urls: {},
              external_landlord_prly_id: null,
              name: 'Apt. 060',
              size: null,
              status: 'active',
              unit_number: null,
              unit_identifier: 'Apt. 060',
              open_listing_id: '63ca2aa6-eb59-494d-96b5-d1bb2216860b',
              property: {
                id: '5b1cb451-cbfc-4a49-a208-5adf1dedf8ec',
                name: '616 Hilll Pass',
                city: 'Cochrane',
                country: 'Canada',
                postal_code: null,
                street_address: '616 Hilll Pass',
                territory: 'fake-territory',
              },
            },
          },
        },
        images: {
          data: [
            {
              id: 'c37aea89-278b-48dd-a869-51576ce41dfd',
              type: 'listing_image',
              attributes: {
                url: 'https://dummyimage.com/300x300/ced296/9c560b.png?text=',
              },
            },
          ],
        },
      },
    },
    {
      id: '07b5c6f1-084e-4adb-b58c-e109ae51ef4f',
      type: 'listing',
      attributes: {
        amenities: {},
        available_date: '2024-12-01',
        description: null,
        price: {
          cents: 111700,
          currency_iso: 'CAD',
        },
        status: 'open',
        price_in_currency: 1117,
        property_unit: {
          data: {
            id: '2b543a23-61b2-49fe-a946-a88a9ac7086d',
            type: 'property_unit',
            attributes: {
              document_urls: {},
              external_landlord_prly_id: null,
              name: 'Suite 136',
              size: null,
              status: 'active',
              unit_number: null,
              unit_identifier: 'Suite 136',
              open_listing_id: '07b5c6f1-084e-4adb-b58c-e109ae51ef4f',
              property: {
                id: 'c234bc74-fe09-4318-955e-6a6f7b34c57b',
                name: "2720 O'Conner Highway",
                city: 'Port Coquitlam',
                country: 'Canada',
                postal_code: null,
                street_address: "2720 O'Conner Highway",
                territory: 'fake-territory',
              },
            },
          },
        },
        images: {
          data: [
            {
              id: '8a5ac922-21ec-4ca5-b1f1-2ffa7a5882a6',
              type: 'listing_image',
              attributes: {
                url: 'https://dummyimage.com/300x300/a38bef/816c3c.png?text=',
              },
            },
          ],
        },
      },
    },
    {
      id: '383f05a5-539f-4557-83ad-50c6ac501cd4',
      type: 'listing',
      attributes: {
        amenities: {},
        available_date: '2024-12-01',
        description: null,
        price: {
          cents: 271500,
          currency_iso: 'CAD',
        },
        status: 'open',
        price_in_currency: 2715,
        property_unit: {
          data: {
            id: 'bd2f77f2-b643-4bdb-a31f-3a65529d0ac8',
            type: 'property_unit',
            attributes: {
              document_urls: {},
              external_landlord_prly_id: null,
              name: 'Suite 685',
              size: null,
              status: 'active',
              unit_number: null,
              unit_identifier: 'Suite 685',
              open_listing_id: '383f05a5-539f-4557-83ad-50c6ac501cd4',
              property: {
                id: '2c6485c1-e0b8-4828-ba56-7d6438c6ce45',
                name: '807 Lecia Flat',
                city: 'Calgary',
                country: 'Canada',
                postal_code: null,
                street_address: '807 Lecia Flat',
                territory: 'fake-territory',
              },
            },
          },
        },
        images: {
          data: [
            {
              id: 'b113f8d9-3584-46cf-b425-a4efb0a6ed86',
              type: 'listing_image',
              attributes: {
                url: 'https://dummyimage.com/300x300/0edf05/b4bcad.png?text=',
              },
            },
          ],
        },
      },
    },
    {
      id: '0a7dbdb9-a037-4f94-bff2-fadb5e374d1d',
      type: 'listing',
      attributes: {
        amenities: {},
        available_date: '2024-12-01',
        description: null,
        price: {
          cents: 241000,
          currency_iso: 'CAD',
        },
        status: 'open',
        price_in_currency: 2410,
        property_unit: {
          data: {
            id: '3d896588-d3c0-4a34-ac7e-1accffa7ca78',
            type: 'property_unit',
            attributes: {
              document_urls: {},
              external_landlord_prly_id: null,
              name: 'Apt. 746',
              size: null,
              status: 'active',
              unit_number: null,
              unit_identifier: 'Apt. 746',
              open_listing_id: '0a7dbdb9-a037-4f94-bff2-fadb5e374d1d',
              property: {
                id: 'e5c5807f-0d09-4bbd-8fb9-74b55c2c7daf',
                name: '593 Vannesa Forks',
                city: 'Newmarket',
                country: 'Canada',
                postal_code: null,
                street_address: '593 Vannesa Forks',
                territory: 'fake-territory',
              },
            },
          },
        },
        images: {
          data: [
            {
              id: 'bfe8b2f4-7bf3-4d42-ad6b-a4e62fd4a03b',
              type: 'listing_image',
              attributes: {
                url: 'https://dummyimage.com/300x300/3cfee6/398773.png?text=',
              },
            },
          ],
        },
      },
    },
    {
      id: '057efdfa-73aa-414d-8d85-c87fb22d270e',
      type: 'listing',
      attributes: {
        amenities: {},
        available_date: '2024-12-01',
        description: null,
        price: {
          cents: 432800,
          currency_iso: 'CAD',
        },
        status: 'open',
        price_in_currency: 4328,
        property_unit: {
          data: {
            id: '6fbe981d-9aab-473d-8f1b-85195fe2aef9',
            type: 'property_unit',
            attributes: {
              document_urls: {},
              external_landlord_prly_id: null,
              name: 'Apt. 999',
              size: null,
              status: 'active',
              unit_number: null,
              unit_identifier: 'Apt. 999',
              open_listing_id: '057efdfa-73aa-414d-8d85-c87fb22d270e',
              property: {
                id: '26ff2e96-c656-4cd2-b0b0-ff30f649da15',
                name: '361 Wyman Hollow',
                city: 'Brampton',
                country: 'Canada',
                postal_code: null,
                street_address: '361 Wyman Hollow',
                territory: 'fake-territory',
              },
            },
          },
        },
        images: {
          data: [
            {
              id: '40486d3f-dfd6-4f77-96f6-b5d5ceb08291',
              type: 'listing_image',
              attributes: {
                url: 'https://dummyimage.com/300x300/e972d5/bb96d3.png?text=',
              },
            },
          ],
        },
      },
    },
    {
      id: '31da51a9-1235-45f1-b50e-7742d2830ac2',
      type: 'listing',
      attributes: {
        amenities: {},
        available_date: '2024-12-01',
        description: null,
        price: {
          cents: 293700,
          currency_iso: 'CAD',
        },
        status: 'open',
        price_in_currency: 2937,
        property_unit: {
          data: {
            id: '6602d55a-9661-4990-beae-e9304ae0de39',
            type: 'property_unit',
            attributes: {
              document_urls: {},
              external_landlord_prly_id: null,
              name: 'Apt. 830',
              size: null,
              status: 'active',
              unit_number: null,
              unit_identifier: 'Apt. 830',
              open_listing_id: '31da51a9-1235-45f1-b50e-7742d2830ac2',
              property: {
                id: '9319a874-cb7f-424c-a586-a924cd3bdf13',
                name: '76137 Erma Crossroad',
                city: 'Lethbridge',
                country: 'Canada',
                postal_code: null,
                street_address: '76137 Erma Crossroad',
                territory: 'fake-territory',
              },
            },
          },
        },
        images: {
          data: [
            {
              id: '468e0301-0769-4280-b401-44cb0ef96cde',
              type: 'listing_image',
              attributes: {
                url: 'https://dummyimage.com/300x300/6cddd4/f8ec38.png?text=',
              },
            },
          ],
        },
      },
    },
    {
      id: 'b833db04-2067-47fe-b033-0a2656588ee7',
      type: 'listing',
      attributes: {
        amenities: {},
        available_date: '2024-12-01',
        description: null,
        price: {
          cents: 418800,
          currency_iso: 'CAD',
        },
        status: 'open',
        price_in_currency: 4188,
        property_unit: {
          data: {
            id: '08211dce-e83b-4d83-9142-133f923523ea',
            type: 'property_unit',
            attributes: {
              document_urls: {},
              external_landlord_prly_id: null,
              name: 'Suite 775',
              size: null,
              status: 'active',
              unit_number: null,
              unit_identifier: 'Suite 775',
              open_listing_id: 'b833db04-2067-47fe-b033-0a2656588ee7',
              property: {
                id: 'ba3f84a2-0c3e-4f19-bb2c-4d0b1e1e6cf1',
                name: '5624 Hamill Pike',
                city: 'Wood Buffalo',
                country: 'Canada',
                postal_code: null,
                street_address: '5624 Hamill Pike',
                territory: 'fake-territory',
              },
            },
          },
        },
        images: {
          data: [
            {
              id: '5d5d0e38-5c57-46fb-ab59-220f033f7bad',
              type: 'listing_image',
              attributes: {
                url: 'https://dummyimage.com/300x300/2fe5f8/36255b.png?text=',
              },
            },
          ],
        },
      },
    },
    {
      id: '9e41d375-8347-41b2-90ee-7c6f0632fc80',
      type: 'listing',
      attributes: {
        amenities: {},
        available_date: '2024-12-01',
        description: null,
        price: {
          cents: 259400,
          currency_iso: 'CAD',
        },
        status: 'open',
        price_in_currency: 2594,
        property_unit: {
          data: {
            id: '68d2366f-c953-4c6a-8732-420c39e8c80c',
            type: 'property_unit',
            attributes: {
              document_urls: {},
              external_landlord_prly_id: null,
              name: 'Apt. 408',
              size: null,
              status: 'active',
              unit_number: null,
              unit_identifier: 'Apt. 408',
              open_listing_id: '9e41d375-8347-41b2-90ee-7c6f0632fc80',
              property: {
                id: 'c793bd18-21e9-4a2b-926f-5c5bbc1d5568',
                name: '56817 Kozey Junction',
                city: 'Oshawa',
                country: 'Canada',
                postal_code: null,
                street_address: '56817 Kozey Junction',
                territory: 'fake-territory',
              },
            },
          },
        },
        images: {
          data: [
            {
              id: '069b586a-7fff-4067-b986-9c5bf08d5d35',
              type: 'listing_image',
              attributes: {
                url: 'https://dummyimage.com/300x300/46e0b9/3ba831.png?text=',
              },
            },
          ],
        },
      },
    },
    {
      id: '38065d2e-9127-4694-b81e-1192b7db647a',
      type: 'listing',
      attributes: {
        amenities: {},
        available_date: '2024-12-01',
        description: null,
        price: {
          cents: 317100,
          currency_iso: 'CAD',
        },
        status: 'open',
        price_in_currency: 3171,
        property_unit: {
          data: {
            id: '2be03198-89d4-4c35-a07c-287c131e9dac',
            type: 'property_unit',
            attributes: {
              document_urls: {},
              external_landlord_prly_id: null,
              name: 'Apt. 688',
              size: null,
              status: 'active',
              unit_number: null,
              unit_identifier: 'Apt. 688',
              open_listing_id: '38065d2e-9127-4694-b81e-1192b7db647a',
              property: {
                id: 'b5f1e642-f9b6-4ceb-91bb-afaf71387c77',
                name: '1634 Elmer Terrace',
                city: 'Peterborough',
                country: 'Canada',
                postal_code: null,
                street_address: '1634 Elmer Terrace',
                territory: 'fake-territory',
              },
            },
          },
        },
        images: {
          data: [
            {
              id: 'bf85de01-30cc-4cac-91b1-30a49680cf21',
              type: 'listing_image',
              attributes: {
                url: 'https://dummyimage.com/300x300/db3206/150e4e.png?text=',
              },
            },
          ],
        },
      },
    },
    {
      id: '609a3c89-71a6-4571-9300-8bf6abfbceb4',
      type: 'listing',
      attributes: {
        amenities: {},
        available_date: '2024-12-01',
        description: null,
        price: {
          cents: 415700,
          currency_iso: 'CAD',
        },
        status: 'open',
        price_in_currency: 4157,
        property_unit: {
          data: {
            id: 'aafdf0ba-b461-4197-9a09-edff042e4365',
            type: 'property_unit',
            attributes: {
              document_urls: {},
              external_landlord_prly_id: null,
              name: 'Apt. 880',
              size: null,
              status: 'active',
              unit_number: null,
              unit_identifier: 'Apt. 880',
              open_listing_id: '609a3c89-71a6-4571-9300-8bf6abfbceb4',
              property: {
                id: 'c4da648d-0924-4c43-916b-d75f8d07b366',
                name: '1347 Schroeder Creek',
                city: 'Halifax Regional Municipality',
                country: 'Canada',
                postal_code: null,
                street_address: '1347 Schroeder Creek',
                territory: 'fake-territory',
              },
            },
          },
        },
        images: {
          data: [
            {
              id: '6c3ec842-c464-47eb-a182-315a7ad3e98e',
              type: 'listing_image',
              attributes: {
                url: 'https://dummyimage.com/300x300/9750ed/4c44d5.png?text=',
              },
            },
          ],
        },
      },
    },
    {
      id: '048aecd1-5df7-4d4b-aff5-f2a4bee045ed',
      type: 'listing',
      attributes: {
        amenities: {},
        available_date: '2024-12-01',
        description: null,
        price: {
          cents: 246200,
          currency_iso: 'CAD',
        },
        status: 'open',
        price_in_currency: 2462,
        property_unit: {
          data: {
            id: 'ced34665-fdfd-4273-95d8-c41dc7179416',
            type: 'property_unit',
            attributes: {
              document_urls: {},
              external_landlord_prly_id: null,
              name: 'Apt. 312',
              size: null,
              status: 'active',
              unit_number: null,
              unit_identifier: 'Apt. 312',
              open_listing_id: '048aecd1-5df7-4d4b-aff5-f2a4bee045ed',
              property: {
                id: '1712a4d5-2cd3-43ae-b316-a0bce376bd39',
                name: '4484 Blanca Forest',
                city: 'North Bay',
                country: 'Canada',
                postal_code: null,
                street_address: '4484 Blanca Forest',
                territory: 'fake-territory',
              },
            },
          },
        },
        images: {
          data: [
            {
              id: 'c18d0af0-ff99-4ec9-9dd2-251f7d9852d1',
              type: 'listing_image',
              attributes: {
                url: 'https://dummyimage.com/300x300/189e95/936288.png?text=',
              },
            },
          ],
        },
      },
    },
    {
      id: '1f256a23-5040-4a94-ab2f-ef5dda8c81ef',
      type: 'listing',
      attributes: {
        amenities: {},
        available_date: '2024-12-01',
        description: null,
        price: {
          cents: 407900,
          currency_iso: 'CAD',
        },
        status: 'open',
        price_in_currency: 4079,
        property_unit: {
          data: {
            id: '097f8332-b64b-42d9-b60a-60c2c97a45de',
            type: 'property_unit',
            attributes: {
              document_urls: {},
              external_landlord_prly_id: null,
              name: 'Apt. 493',
              size: null,
              status: 'active',
              unit_number: null,
              unit_identifier: 'Apt. 493',
              open_listing_id: '1f256a23-5040-4a94-ab2f-ef5dda8c81ef',
              property: {
                id: '2c9010cf-f87a-4c4c-8d6c-7406f624ca5d',
                name: '241 Murazik Viaduct',
                city: 'Saint-Raymond',
                country: 'Canada',
                postal_code: null,
                street_address: '241 Murazik Viaduct',
                territory: 'fake-territory',
              },
            },
          },
        },
        images: {
          data: [
            {
              id: 'b4995245-ecac-48f2-9382-8ba91d782511',
              type: 'listing_image',
              attributes: {
                url: 'https://dummyimage.com/300x300/71787c/d82b57.png?text=',
              },
            },
          ],
        },
      },
    },
    {
      id: '544c0538-63be-4c1d-a895-ec77f556988c',
      type: 'listing',
      attributes: {
        amenities: {},
        available_date: '2024-12-01',
        description: null,
        price: {
          cents: 426200,
          currency_iso: 'CAD',
        },
        status: 'open',
        price_in_currency: 4262,
        property_unit: {
          data: {
            id: '3f200692-ba40-40b4-8224-b993d28a9d5a',
            type: 'property_unit',
            attributes: {
              document_urls: {},
              external_landlord_prly_id: null,
              name: 'Suite 084',
              size: null,
              status: 'active',
              unit_number: null,
              unit_identifier: 'Suite 084',
              open_listing_id: '544c0538-63be-4c1d-a895-ec77f556988c',
              property: {
                id: 'eed26ea6-ec8c-4a37-91af-44beb99149fa',
                name: '080 Jona Club',
                city: 'Kawartha Lakes',
                country: 'Canada',
                postal_code: null,
                street_address: '080 Jona Club',
                territory: 'fake-territory',
              },
            },
          },
        },
        images: {
          data: [
            {
              id: 'f2bbafa2-945d-4d93-8685-786d537fb729',
              type: 'listing_image',
              attributes: {
                url: 'https://dummyimage.com/300x300/b28c79/3becc8.png?text=',
              },
            },
          ],
        },
      },
    },
    {
      id: '7df11dcb-2e44-4237-adbd-42534da1bea4',
      type: 'listing',
      attributes: {
        amenities: {},
        available_date: '2024-12-01',
        description: null,
        price: {
          cents: 167500,
          currency_iso: 'CAD',
        },
        status: 'open',
        price_in_currency: 1675,
        property_unit: {
          data: {
            id: 'cc8d7a5e-5371-42ca-8ed7-f9fabeb03e6c',
            type: 'property_unit',
            attributes: {
              document_urls: {},
              external_landlord_prly_id: null,
              name: 'Apt. 980',
              size: null,
              status: 'active',
              unit_number: null,
              unit_identifier: 'Apt. 980',
              open_listing_id: '7df11dcb-2e44-4237-adbd-42534da1bea4',
              property: {
                id: 'ab48982d-5671-4204-b8dc-3743f0eccbae',
                name: '128 Hamill Landing',
                city: 'North Bay',
                country: 'Canada',
                postal_code: null,
                street_address: '128 Hamill Landing',
                territory: 'fake-territory',
              },
            },
          },
        },
        images: {
          data: [
            {
              id: '6530e7ce-f749-4f17-a6e5-03f3078eadb6',
              type: 'listing_image',
              attributes: {
                url: 'https://dummyimage.com/300x300/aa743d/d65821.png?text=',
              },
            },
          ],
        },
      },
    },
    {
      id: 'a672a147-7dfd-4c4c-9197-b0ca57be0951',
      type: 'listing',
      attributes: {
        amenities: {},
        available_date: '2024-12-01',
        description: null,
        price: {
          cents: 83100,
          currency_iso: 'CAD',
        },
        status: 'open',
        price_in_currency: 831,
        property_unit: {
          data: {
            id: '7145b9a3-94b4-41fd-b400-f6cd5430cc1c',
            type: 'property_unit',
            attributes: {
              document_urls: {},
              external_landlord_prly_id: null,
              name: 'Suite 462',
              size: null,
              status: 'active',
              unit_number: null,
              unit_identifier: 'Suite 462',
              open_listing_id: 'a672a147-7dfd-4c4c-9197-b0ca57be0951',
              property: {
                id: '2a4789c5-e5da-46a2-9cec-2469167bfed6',
                name: '300 Vanita Station',
                city: 'Whitehorse',
                country: 'Canada',
                postal_code: null,
                street_address: '300 Vanita Station',
                territory: 'fake-territory',
              },
            },
          },
        },
        images: {
          data: [
            {
              id: 'd5cfaddd-3409-4f2f-8140-fe30b6de358f',
              type: 'listing_image',
              attributes: {
                url: 'https://dummyimage.com/300x300/3ac2dd/f4e331.png?text=',
              },
            },
          ],
        },
      },
    },
    {
      id: 'cde8c961-387e-426e-93c5-d9e2c034e387',
      type: 'listing',
      attributes: {
        amenities: {},
        available_date: '2024-12-01',
        description: null,
        price: {
          cents: 408300,
          currency_iso: 'CAD',
        },
        status: 'open',
        price_in_currency: 4083,
        property_unit: {
          data: {
            id: 'fc5fc557-043d-435d-9b18-ee0ae641fe8d',
            type: 'property_unit',
            attributes: {
              document_urls: {},
              external_landlord_prly_id: null,
              name: 'Suite 225',
              size: null,
              status: 'active',
              unit_number: null,
              unit_identifier: 'Suite 225',
              open_listing_id: 'cde8c961-387e-426e-93c5-d9e2c034e387',
              property: {
                id: '302ff457-1581-42fb-b6d6-6dd19facecdc',
                name: '3186 Schaden Ranch',
                city: 'Whitby',
                country: 'Canada',
                postal_code: null,
                street_address: '3186 Schaden Ranch',
                territory: 'fake-territory',
              },
            },
          },
        },
        images: {
          data: [
            {
              id: '1d2371cd-2dbe-47ac-8e64-30135977c153',
              type: 'listing_image',
              attributes: {
                url: 'https://dummyimage.com/300x300/24f3e2/71f7bb.png?text=',
              },
            },
          ],
        },
      },
    },
    {
      id: '7f50f607-1334-4602-be07-4d1447746240',
      type: 'listing',
      attributes: {
        amenities: {},
        available_date: '2024-12-01',
        description: null,
        price: {
          cents: 257500,
          currency_iso: 'CAD',
        },
        status: 'open',
        price_in_currency: 2575,
        property_unit: {
          data: {
            id: 'b19a8c8a-69c1-46fb-be92-cc5c03c300dd',
            type: 'property_unit',
            attributes: {
              document_urls: {},
              external_landlord_prly_id: null,
              name: 'Suite 684',
              size: null,
              status: 'active',
              unit_number: null,
              unit_identifier: 'Suite 684',
              open_listing_id: '7f50f607-1334-4602-be07-4d1447746240',
              property: {
                id: '9d7b89da-0aea-4598-b606-f80a606a1fc6',
                name: '75336 Kyoko Lodge',
                city: 'Saint-Jérôme',
                country: 'Canada',
                postal_code: null,
                street_address: '75336 Kyoko Lodge',
                territory: 'fake-territory',
              },
            },
          },
        },
        images: {
          data: [
            {
              id: 'eaf4e7fe-1753-4059-b877-1b34bd70c48f',
              type: 'listing_image',
              attributes: {
                url: 'https://dummyimage.com/300x300/14783c/2702d4.png?text=',
              },
            },
          ],
        },
      },
    },
    {
      id: '641e9661-347e-4c6c-be30-9751d0a4c3a7',
      type: 'listing',
      attributes: {
        amenities: {},
        available_date: '2024-12-01',
        description: null,
        price: {
          cents: 367000,
          currency_iso: 'CAD',
        },
        status: 'open',
        price_in_currency: 3670,
        property_unit: {
          data: {
            id: '3cc8bc15-fc7a-4e0b-9ffe-3ba595976999',
            type: 'property_unit',
            attributes: {
              document_urls: {},
              external_landlord_prly_id: null,
              name: 'Suite 519',
              size: null,
              status: 'active',
              unit_number: null,
              unit_identifier: 'Suite 519',
              open_listing_id: '641e9661-347e-4c6c-be30-9751d0a4c3a7',
              property: {
                id: '2f3e6fea-a2c8-4d50-b2d0-8bacf3cfed9c',
                name: '226 Kent Bridge',
                city: 'Chibougamau',
                country: 'Canada',
                postal_code: null,
                street_address: '226 Kent Bridge',
                territory: 'fake-territory',
              },
            },
          },
        },
        images: {
          data: [
            {
              id: 'd0512702-3937-4eca-8759-0eac5995b922',
              type: 'listing_image',
              attributes: {
                url: 'https://dummyimage.com/300x300/31b926/ea0f16.png?text=',
              },
            },
          ],
        },
      },
    },
    {
      id: '47996509-cdbf-4657-a2ee-8ab854547d3b',
      type: 'listing',
      attributes: {
        amenities: {},
        available_date: '2024-12-01',
        description: null,
        price: {
          cents: 395200,
          currency_iso: 'CAD',
        },
        status: 'open',
        price_in_currency: 3952,
        property_unit: {
          data: {
            id: 'f9ebba86-df86-4790-b2ce-6efa50b2574b',
            type: 'property_unit',
            attributes: {
              document_urls: {},
              external_landlord_prly_id: null,
              name: 'Suite 981',
              size: null,
              status: 'active',
              unit_number: null,
              unit_identifier: 'Suite 981',
              open_listing_id: '47996509-cdbf-4657-a2ee-8ab854547d3b',
              property: {
                id: 'f01598d8-86de-468d-9745-dd9f61a521a2',
                name: '3161 Gleichner Mills',
                city: 'Gaspé',
                country: 'Canada',
                postal_code: null,
                street_address: '3161 Gleichner Mills',
                territory: 'fake-territory',
              },
            },
          },
        },
        images: {
          data: [
            {
              id: 'c68ddd0c-e781-4b25-9e2f-586f7318e9c2',
              type: 'listing_image',
              attributes: {
                url: 'https://dummyimage.com/300x300/07d1ab/7f287d.png?text=',
              },
            },
          ],
        },
      },
    },
    {
      id: 'f479845f-d202-4e0e-b274-35c823aa0051',
      type: 'listing',
      attributes: {
        amenities: {},
        available_date: '2024-12-01',
        description: null,
        price: {
          cents: 132800,
          currency_iso: 'CAD',
        },
        status: 'open',
        price_in_currency: 1328,
        property_unit: {
          data: {
            id: '55609c7c-8bea-4e3a-88bb-7a2d96644a3b',
            type: 'property_unit',
            attributes: {
              document_urls: {},
              external_landlord_prly_id: null,
              name: 'Suite 569',
              size: null,
              status: 'active',
              unit_number: null,
              unit_identifier: 'Suite 569',
              open_listing_id: 'f479845f-d202-4e0e-b274-35c823aa0051',
              property: {
                id: '92669762-1351-43cf-b336-d325e447f80f',
                name: '695 DuBuque Alley',
                city: 'Cape Breton',
                country: 'Canada',
                postal_code: null,
                street_address: '695 DuBuque Alley',
                territory: 'fake-territory',
              },
            },
          },
        },
        images: {
          data: [
            {
              id: 'e5c8af34-e979-4a1b-866a-bc7885a170e5',
              type: 'listing_image',
              attributes: {
                url: 'https://dummyimage.com/300x300/a5e5ab/8c3208.png?text=',
              },
            },
          ],
        },
      },
    },
    {
      id: 'be3f847d-d181-4a80-a966-9f61a22104ca',
      type: 'listing',
      attributes: {
        amenities: {},
        available_date: '2024-12-01',
        description: null,
        price: {
          cents: 199900,
          currency_iso: 'CAD',
        },
        status: 'open',
        price_in_currency: 1999,
        property_unit: {
          data: {
            id: 'cfef129f-11df-4c86-ae8b-b40db9de1634',
            type: 'property_unit',
            attributes: {
              document_urls: {},
              external_landlord_prly_id: null,
              name: 'Apt. 115',
              size: null,
              status: 'active',
              unit_number: null,
              unit_identifier: 'Apt. 115',
              open_listing_id: 'be3f847d-d181-4a80-a966-9f61a22104ca',
              property: {
                id: '86eaff02-e339-4b06-99ea-a4f74279bf21',
                name: '05466 Jeannette Grove',
                city: 'Kearney',
                country: 'Canada',
                postal_code: null,
                street_address: '05466 Jeannette Grove',
                territory: 'fake-territory',
              },
            },
          },
        },
        images: {
          data: [
            {
              id: '765163e1-6ee3-4126-9026-ded81188f67a',
              type: 'listing_image',
              attributes: {
                url: 'https://dummyimage.com/300x300/1d94af/61968c.png?text=',
              },
            },
          ],
        },
      },
    },
  ],
  meta: {
    current_page: 1,
    items_on_page: 25,
    last_page: 8,
    next_page: 2,
    prev_page: null,
    total_count: 200,
  },
};
