export type PartnerResponse = {
     content: Product[];
     totalPages: number;
}

export type Product = {
     id: number;
     corporateName: string;
     companyName: string;
     latitude: string;
     longitude: string;
     url: string;
     nrle: string;
     street: string;
     streetNumber: number;
     phone: string;
     whatsapp: string;
     capability: number;
     average: number;
     featured_photo: string;
     registerDate: null,
     category_id: number;
     county_id: number;
     user_id: number;
}

export type Category = {
     id: number;
     name: string;
}

export type Filters = {
     name: string;
   }