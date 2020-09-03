import { ApiProperty } from "@nestjs/swagger";

export class NozzleSleeveDto {
  @ApiProperty({ example: '1', description: 'The Unique identifier for the Nozzle Sleeve', required: true })
  id: number;
  
  @ApiProperty({ example: '10', description: 'The Foreign key reference to Gas Station', required: true })
  gas_nozzle_id: number;
  
  @ApiProperty({})
  pcb_mac: string;
  
  @ApiProperty({})
  pcb_code: string;
  
  @ApiProperty({})
  serial_number: string;
  
  @ApiProperty({})
  coil_LOT: string;
  
  @ApiProperty({})
  casing_LOT: string;
  
  @ApiProperty({})
  display_LOT: string;
  
  @ApiProperty({})
  capacitor: string;
  
  @ApiProperty({})
  production_date: Date;
  
  @ApiProperty({})
  approval_date: Date;
  
  @ApiProperty({})
  install_date: Date;
  
  @ApiProperty({})
  removal_date: Date;
  
  @ApiProperty({})
  logo_id: number;
}
