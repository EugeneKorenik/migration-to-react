package com.issoft.servlet;

import com.issoft.servlet.dao.VehicleDAO;
import com.issoft.servlet.entity.Vehicle;
import lombok.extern.slf4j.Slf4j;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.List;

@Slf4j
public class DispatcherServlet extends HttpServlet {

    public void doGet(HttpServletRequest request, HttpServletResponse response) {
        List<Vehicle> vehicles = VehicleDAO.getInstance().findAll();

        HttpSession session = request.getSession();
        session.setAttribute("vehicles", vehicles);

        try {
            request.getRequestDispatcher("/vehicles.jsp").forward(request, response);
        } catch(Exception e) {
            log.error("Exception while redirect", e);
        }
    }

}
