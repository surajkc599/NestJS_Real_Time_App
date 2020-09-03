import { ApiProperty } from "@nestjs/swagger";

export class NozzleBoothDto {
  @ApiProperty({ example: '1', description: 'The Unique identifier for Nozzle Booth', required: true })
  id: number;

  @ApiProperty({ example: '10', description: 'The Foreign key reference to Gas Station', required: true })
  gas_nozzle_id: number;
  
  @ApiProperty({})
  pcb_code: string;
  
  @ApiProperty({})
  serial_number: string;
  
  @ApiProperty({})
  coil_LOT: string;
  
  @ApiProperty({})
  casing_LOT: string;
  
  @ApiProperty({})
  resin_code: string;
  
  @ApiProperty({})
  production_date: Date;
  
  @ApiProperty({})
  approval_date: Date;
  
  @ApiProperty({})
  install_date: Date;
  
  @ApiProperty({})
  removal_date: Date;
}
