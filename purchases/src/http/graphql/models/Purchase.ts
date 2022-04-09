import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Product } from './Product';

enum PurchaseStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

registerEnumType(PurchaseStatus, {
  name: 'PurchaseStatus',
  description: 'Available purchase statuses',
});

@ObjectType()
export class Purchase {
  @Field(() => ID)
  id: string;

  @Field(() => PurchaseStatus)
  status: PurchaseStatus;

  @Field()
  slug: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Product)
  product: Product;

  productId: string;
}
