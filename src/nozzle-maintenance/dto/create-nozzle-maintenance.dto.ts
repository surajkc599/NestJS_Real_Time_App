import { ApiProperty } from "@nestjs/swagger";

export class CreateNozzleMaintenanceDto {
  @ApiProperty({ example: '1', description: 'The Unique identifier for the Nozzle', required: true })
  id: number;
 
  @ApiProperty({})
  date: Date;
 
  @ApiProperty({ example: '1', description: 'The Unique identifier for the Mechanic', required: true })
  mechanic_id: number;
 
  @ApiProperty({})
  description: string;
 
  @ApiProperty({})
  nozzle_id: number;
}
