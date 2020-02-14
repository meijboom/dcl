using Microsoft.EntityFrameworkCore.Migrations;

namespace Dialog_component_library.Migrations
{
    public partial class PCmigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Components_ComponentId",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Users_ComponentId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "ComponentId",
                table: "Users");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ComponentId",
                table: "Users",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Users_ComponentId",
                table: "Users",
                column: "ComponentId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Components_ComponentId",
                table: "Users",
                column: "ComponentId",
                principalTable: "Components",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
