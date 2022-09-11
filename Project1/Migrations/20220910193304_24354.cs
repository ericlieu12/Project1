using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project1.Migrations
{
    public partial class _24354 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FoodItems_Stores_StoreId",
                table: "FoodItems");

            migrationBuilder.DropColumn(
                name: "Calcium",
                table: "FoodItems");

            migrationBuilder.DropColumn(
                name: "Carbs",
                table: "FoodItems");

            migrationBuilder.DropColumn(
                name: "Fat",
                table: "FoodItems");

            migrationBuilder.DropColumn(
                name: "Fiber",
                table: "FoodItems");

            migrationBuilder.DropColumn(
                name: "Iron",
                table: "FoodItems");

            migrationBuilder.DropColumn(
                name: "Magnesium",
                table: "FoodItems");

            migrationBuilder.DropColumn(
                name: "Protein",
                table: "FoodItems");

            migrationBuilder.DropColumn(
                name: "StoreNameID",
                table: "FoodItems");

            migrationBuilder.DropColumn(
                name: "VitaminA",
                table: "FoodItems");

            migrationBuilder.DropColumn(
                name: "VitaminB12",
                table: "FoodItems");

            migrationBuilder.DropColumn(
                name: "VitaminB6",
                table: "FoodItems");

            migrationBuilder.DropColumn(
                name: "VitaminE",
                table: "FoodItems");

            migrationBuilder.DropColumn(
                name: "VitaminK",
                table: "FoodItems");

            migrationBuilder.RenameColumn(
                name: "StoreId",
                table: "FoodItems",
                newName: "StoreID");

            migrationBuilder.RenameIndex(
                name: "IX_FoodItems_StoreId",
                table: "FoodItems",
                newName: "IX_FoodItems_StoreID");

            migrationBuilder.AlterColumn<int>(
                name: "StoreID",
                table: "FoodItems",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Price",
                table: "FoodItems",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddForeignKey(
                name: "FK_FoodItems_Stores_StoreID",
                table: "FoodItems",
                column: "StoreID",
                principalTable: "Stores",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FoodItems_Stores_StoreID",
                table: "FoodItems");

            migrationBuilder.DropColumn(
                name: "Price",
                table: "FoodItems");

            migrationBuilder.RenameColumn(
                name: "StoreID",
                table: "FoodItems",
                newName: "StoreId");

            migrationBuilder.RenameIndex(
                name: "IX_FoodItems_StoreID",
                table: "FoodItems",
                newName: "IX_FoodItems_StoreId");

            migrationBuilder.AlterColumn<int>(
                name: "StoreId",
                table: "FoodItems",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<string>(
                name: "Calcium",
                table: "FoodItems",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Carbs",
                table: "FoodItems",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Fat",
                table: "FoodItems",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Fiber",
                table: "FoodItems",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Iron",
                table: "FoodItems",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Magnesium",
                table: "FoodItems",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Protein",
                table: "FoodItems",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "StoreNameID",
                table: "FoodItems",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "VitaminA",
                table: "FoodItems",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "VitaminB12",
                table: "FoodItems",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "VitaminB6",
                table: "FoodItems",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "VitaminE",
                table: "FoodItems",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "VitaminK",
                table: "FoodItems",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddForeignKey(
                name: "FK_FoodItems_Stores_StoreId",
                table: "FoodItems",
                column: "StoreId",
                principalTable: "Stores",
                principalColumn: "Id");
        }
    }
}
