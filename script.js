import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class AttendanceServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String name = request.getParameter("name");
        String status = request.getParameter("status");

        out.println("<html><body>");
        out.println("<h2>Attendance Recorded</h2>");
        out.println("Name: " + name + "<br>");
        out.println("Status: " + status + "<br>");
        out.println("<a href='index.html'>Go Back</a>");
        out.println("</body></html>");
    }
}